'use client';

// ============================================================================
// BEFORE/AFTER PROJECT GALLERY
// Showcases completed work with before/after slider
// ============================================================================

import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Star } from 'lucide-react';
import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  location: string;
  service: string;
  completedDate: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  testimonial?: {
    name: string;
    text: string;
    rating: number;
  };
}

// Sample projects - replace with actual images/data
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Victorian Bathroom Restoration',
    location: 'Hampstead, NW3',
    service: 'Bathroom Installation',
    completedDate: 'November 2024',
    description: 'Complete strip-out and restoration of a period bathroom in a Grade II listed property. Included underfloor heating, walk-in shower, and restored original cast iron radiator.',
    beforeImage: '/images/projects/bathroom-before-1.jpg',
    afterImage: '/images/projects/bathroom-after-1.jpg',
    testimonial: {
      name: 'Sarah M.',
      text: 'Absolutely transformed our bathroom. The attention to period detail was exceptional.',
      rating: 5,
    },
  },
  {
    id: '2',
    title: 'Modern Kitchen Installation',
    location: 'Highgate, N6',
    service: 'Kitchen Fitting',
    completedDate: 'October 2024',
    description: 'Full kitchen renovation including knocking through to create open-plan living. German handleless units, quartz worktops, and integrated appliances.',
    beforeImage: '/images/projects/kitchen-before-1.jpg',
    afterImage: '/images/projects/kitchen-after-1.jpg',
    testimonial: {
      name: 'James T.',
      text: 'The team worked incredibly efficiently. Our new kitchen is stunning.',
      rating: 5,
    },
  },
  {
    id: '3',
    title: 'Boiler System Upgrade',
    location: 'Belsize Park, NW3',
    service: 'Boiler Installation',
    completedDate: 'September 2024',
    description: 'Replaced 20-year-old conventional system with modern condensing combi boiler. New smart thermostat and radiator upgrades throughout.',
    beforeImage: '/images/projects/boiler-before-1.jpg',
    afterImage: '/images/projects/boiler-after-1.jpg',
    testimonial: {
      name: 'David & Emma L.',
      text: 'Our heating bills have dropped by 30% since the upgrade. Excellent service.',
      rating: 5,
    },
  },
  {
    id: '4',
    title: 'Loft Conversion',
    location: 'Crouch End, N8',
    service: 'Loft Conversion',
    completedDate: 'August 2024',
    description: 'Dormer loft conversion creating master bedroom with en-suite. Velux windows and bespoke built-in storage.',
    beforeImage: '/images/projects/loft-before-1.jpg',
    afterImage: '/images/projects/loft-after-1.jpg',
    testimonial: {
      name: 'Michael R.',
      text: 'Added a whole new floor to our home. The finish quality is outstanding.',
      rating: 5,
    },
  },
];

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream-100">
      {/* Placeholder when no real images */}
      <div className="absolute inset-0 flex items-center justify-center text-navy-400">
        <div className="text-center">
          <div className="text-6xl mb-2">🏠</div>
          <p className="text-sm">Before/After Image</p>
          <p className="text-xs text-navy-300">{title}</p>
        </div>
      </div>

      {/* Actual slider implementation - uncomment when you have images */}
      {/*
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`${title} - After`}
          fill
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${title} - Before`}
          fill
          className="object-cover"
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-navy-600" />
          <ChevronRight className="w-4 h-4 text-navy-600" />
        </div>
      </div>
      */}

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-navy-900/80 text-white text-xs font-medium px-2 py-1 rounded">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 text-xs font-medium px-2 py-1 rounded">
        After
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer border border-cream-200"
    >
      <BeforeAfterSlider
        beforeImage={project.beforeImage}
        afterImage={project.afterImage}
        title={project.title}
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg text-navy-900 mb-2">{project.title}</h3>
        <div className="flex items-center gap-4 text-sm text-navy-600 mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {project.completedDate}
          </span>
        </div>
        <span className="inline-block bg-gold-100 text-gold-700 text-sm px-3 py-1 rounded-full">
          {project.service}
        </span>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-navy-900/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <BeforeAfterSlider
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
            title={project.title}
          />

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">{project.title}</h2>
            <div className="flex flex-wrap items-center gap-4 text-navy-600 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.completedDate}
              </span>
              <span className="bg-gold-100 text-gold-700 text-sm px-3 py-1 rounded-full">
                {project.service}
              </span>
            </div>
            <p className="text-navy-700 leading-relaxed mb-6">{project.description}</p>

            {project.testimonial && (
              <div className="bg-cream-50 rounded-xl p-5 border border-cream-200">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-navy-700 italic mb-2">"{project.testimonial.text}"</p>
                <p className="text-navy-500 text-sm font-medium">— {project.testimonial.name}</p>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full bg-navy-100 hover:bg-navy-200 text-navy-900 font-medium py-3 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProjectGalleryProps {
  projects?: Project[];
  limit?: number;
  showTitle?: boolean;
}

export function ProjectGallery({ projects = sampleProjects, limit, showTitle = true }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Browse our portfolio of completed work across North London. Every project is completed to the highest standards with attention to detail.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {limit && projects.length > limit && (
          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 bg-navy-100 hover:bg-navy-200 text-navy-900 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View All Projects
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
