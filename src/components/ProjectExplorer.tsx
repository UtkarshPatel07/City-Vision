import { useState } from 'react';
import { MapPin, Filter, Grid, List, Eye, Download, Car, Plane } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectExplorer() {
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    location: 'all',
    priceRange: 'all',
  });

  const projects = [
    {
      id: '1',
      name: 'Ghoti Green Valley',
      location: 'Ghoti, Igatpuri',
      description: 'Premium NA plots surrounded by lush greenery with mountain views',
      priceRange: '₹8-15 Lakh',
      pricePerSqFt: '₹1,200/sq ft',
      plotSizes: '1000-2500 sq ft',
      totalPlots: 120,
      availablePlots: 45,
      approvals: ['RERA', 'NMRDA', 'NA Permission'],
      amenities: ['Gated Community', '24/7 Security', 'Wide Roads', 'Underground Cables'],
      distanceFromExpressway: '2.5 km',
      distanceFromAirport: '85 km',
      image: 'https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBsYW5kJTIwcGxvdHxlbnwxfHx8fDE3NTkxMzQ3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      roiPotential: '25-30%',
      highlights: ['Mountain View', 'Near Tourist Spots', 'Cool Climate']
    },
    {
      id: '2',
      name: 'Makhmalabad Heights',
      location: 'Makhmalabad, Nashik',
      description: 'Urban development plots in the heart of Nashik city',
      priceRange: '₹12-25 Lakh',
      pricePerSqFt: '₹1,800/sq ft',
      plotSizes: '800-2000 sq ft',
      totalPlots: 200,
      availablePlots: 78,
      approvals: ['RERA', 'NMRDA', 'PMC'],
      amenities: ['Metro Connectivity', 'Schools Nearby', 'Shopping Centers', 'Hospitals'],
      distanceFromExpressway: '8 km',
      distanceFromAirport: '25 km',
      image: 'https://images.unsplash.com/photo-1758633995074-56c9990fdb9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwaW5mcmFzdHJ1Y3R1cmUlMjBoaWdod2F5fGVufDF8fHx8MTc1OTEzNDcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      roiPotential: '30-35%',
      highlights: ['City Center', 'Metro Station', 'IT Hub Proximity']
    },
    {
      id: '3',
      name: 'Gonde Industrial Park',
      location: 'Gonde, MIDC Igatpuri',
      description: 'Industrial plots perfect for manufacturing and warehousing',
      priceRange: '₹15-40 Lakh',
      pricePerSqFt: '₹1,500/sq ft',
      plotSizes: '2000-5000 sq ft',
      totalPlots: 80,
      availablePlots: 32,
      approvals: ['RERA', 'NMRDA', 'MIDC', 'PCB'],
      amenities: ['Industrial Infrastructure', 'Power Backup', 'Raw Water Supply', 'Effluent Treatment'],
      distanceFromExpressway: '1.2 km',
      distanceFromAirport: '75 km',
      image: 'https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGV2ZWxvcG1lbnQlMjBsYW5kJTIwcGxvdHxlbnwxfHx8fDE3NTkxMzQ3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      roiPotential: '35-40%',
      highlights: ['MIDC Approved', 'Industrial Zone', 'Export Potential']
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filters.location !== 'all' && !project.location.toLowerCase().includes(filters.location)) return false;
    if (filters.priceRange !== 'all') {
      const price = parseInt(project.priceRange.split('-')[0].replace('₹', '').replace(' Lakh', ''));
      if (filters.priceRange === 'under-10' && price >= 10) return false;
      if (filters.priceRange === '10-20' && (price < 10 || price > 20)) return false;
      if (filters.priceRange === 'above-20' && price <= 20) return false;
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-[var(--light-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl text-[var(--navy)] mb-6">
            Explore Our <span className="text-[var(--vine-green)]">Premium Projects</span>
          </h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="nashik">Nashik</SelectItem>
                <SelectItem value="igatpuri">Igatpuri</SelectItem>
                <SelectItem value="ghoti">Ghoti</SelectItem>
                <SelectItem value="gonde">Gonde</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-10">Under ₹10 Lakh</SelectItem>
                <SelectItem value="10-20">₹10-20 Lakh</SelectItem>
                <SelectItem value="above-20">Above ₹20 Lakh</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-gray-200">
              <Filter size={16} />
              <span className="text-sm font-medium">{filteredProjects.length} Projects Found</span>
            </div>
          </div>
          
          <p className="text-[var(--medium-gray)] text-lg max-w-3xl mx-auto mb-8">
            Discover RERA-approved NA plots in Nashik's most promising locations. 
            Each project offers unique advantages for investment and development.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' 
              : 'space-y-6'
          }`}
        >
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden border-none shadow-md max-w-[350px]">
              <div className="relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  width={350}
                  height={180}
                  className="w-full h-[160px] object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-[var(--warm-gold)] text-white">
                  {project.roiPotential} ROI
                </Badge>
              </div>
              
              <CardContent className="pt-3 px-3">
                <h3 className="text-base font-semibold text-[var(--navy)] mb-1">{project.name}</h3>
                <div className="flex items-center text-[var(--medium-gray)] mb-2">
                  <MapPin size={12} className="mr-1" />
                  <span className="text-xs">{project.location}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="text-[var(--vine-green)] font-semibold text-sm">{project.priceRange}</p>
                    <p className="text-xs text-[var(--medium-gray)]">{project.pricePerSqFt}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[var(--navy)] font-semibold text-sm">{project.availablePlots} Available</p>
                    <p className="text-xs text-[var(--medium-gray)]">of {project.totalPlots} Plots</p>
                  </div>
                </div>
                
                <div className="flex flex-row gap-4 mb-2 text-xs">
                  <div className="flex items-center">
                    <Car size={12} className="text-[var(--medium-gray)] mr-1" />
                    <span>{project.distanceFromExpressway}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Plane size={12} className="text-[var(--medium-gray)] mr-1" />
                    <span>{project.distanceFromAirport}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.approvals.map((approval, i) => (
                    <Badge key={i} variant="outline" className="bg-white text-[var(--navy)] text-xs px-1 py-0">
                      {approval}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.highlights.map((highlight, i) => (
                    <Badge key={i} className="bg-[var(--light-gray)] text-[var(--navy)] text-xs px-1 py-0">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" className="text-[var(--navy)]">
                  <Eye size={16} className="mr-2" /> View Details
                </Button>
                <Button variant="outline" className="text-[var(--navy)]">
                  <Download size={16} className="mr-2" /> Brochure
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}