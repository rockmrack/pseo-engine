import { NextRequest, NextResponse } from 'next/server';

// ============================================================================
// CONTACT FORM API ENDPOINT
// Receives form submissions and can forward to email/webhook
// ============================================================================

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
  urgency: 'standard' | 'urgent' | 'emergency';
  timestamp: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactSubmission = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.postcode || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate UK phone number (basic)
    const phoneRegex = /^(\+44|0)[0-9]{9,10}$/;
    const cleanPhone = data.phone.replace(/\s/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid UK phone number' },
        { status: 400 }
      );
    }

    // Log the submission (in production, send to email/CRM)
    console.log('📧 New Contact Form Submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      postcode: data.postcode,
      service: data.service,
      urgency: data.urgency,
      message: data.message?.substring(0, 100),
      timestamp: data.timestamp,
      source: data.source,
    });

    // Send to webhook if configured (e.g., Zapier, Make, n8n)
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (webhookError) {
        console.error('Webhook failed:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // Send email notification if configured (using Resend, SendGrid, etc.)
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Website <noreply@hampsteadrenovations.co.uk>',
            to: process.env.CONTACT_EMAIL,
            subject: `${data.urgency === 'emergency' ? '🚨 EMERGENCY: ' : data.urgency === 'urgent' ? '⚡ URGENT: ' : ''}New Enquiry - ${data.service}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <table style="border-collapse: collapse; width: 100%;">
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${cleanPhone}">${data.phone}</a></td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Postcode</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.postcode}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Service</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.service}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Urgency</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.urgency}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message || 'No message provided'}</td></tr>
              </table>
              <p style="margin-top: 16px; color: #666;">
                Submitted from: ${data.source}<br>
                Time: ${data.timestamp}
              </p>
            `,
          }),
        });
      } catch (emailError) {
        console.error('Email failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your enquiry. We will be in touch shortly.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
