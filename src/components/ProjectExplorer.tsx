import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Filter, Grid, List, Eye, Download, ArrowRight, Zap, Car, Plane } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectExplorer() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    location: 'all',
    priceRange: 'all',
    size: 'all'
  });

  const projects = [
    {
      id: '1',
      name: 'Ghoti Green Valley',
      location: 'Ghoti, Igatpuri',
      description: 'Premium NA plots surrounded by lush greenery with mountain views',
      priceRange: '₹8-15 Lakh',
      pricePerSqFt: '₹1,200',
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
      pricePerSqFt: '₹1,800',
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
      pricePerSqFt: '₹1,500',
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-[var(--navy)] mb-6">
            Explore Our <span className="text-[var(--vine-green)]">Premium Projects</span>
          </h2>
          <p className="text-[var(--medium-gray)] text-lg max-w-3xl mx-auto mb-8">
            Discover RERA-approved NA plots in Nashik's most promising locations. 
            Each project offers unique advantages for investment and development.
          </p>

          {/* Interactive Map Preview */}
          <div className="relative bg-gradient-to-br from-[var(--navy)] to-[var(--vine-green)] rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <h3 className="text-white text-xl mb-4">Project Locations on Map</h3>
            <div className="aspect-video bg-white/10 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20" />
              <div className="text-white/80 text-center z-10">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-[var(--warm-gold)]" />
                <p>Interactive Map Coming Soon</p>
                <p className="text-sm mt-2">View all project locations on Samruddhi Expressway corridor</p>
              </div>
              
              {/* Mock pins */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-[var(--warm-gold)] rounded-full animate-pulse" />
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-[var(--warm-gold)] rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-[var(--warm-gold)] rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Filters and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8"
        >
          <div className="flex flex-wrap gap-4">
            <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({...prev, location: value}))}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="igatpuri">Igatpuri</SelectItem>
                <SelectItem value="nashik">Nashik City</SelectItem>
                <SelectItem value="midc">MIDC Areas</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.priceRange} onValueChange={(value) => setFilters(prev => ({...prev, priceRange: value}))}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-10">Under ₹10L</SelectItem>
                <SelectItem value="10-20">₹10-20L</SelectItem>
                <SelectItem value="above-20">Above ₹20L</SelectItem>
              </SelectContent>
            </Select>

            <Badge variant="secondary" className="px-3 py-2">
              <Filter className="w-4 h-4 mr-2" />
              {filteredProjects.length} Projects Found
            </Badge>
          </div>

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
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          layout
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}>
                  <div className={`${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[var(--vine-green)] text-white">
                          {project.roiPotential} ROI
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90">
                          {project.availablePlots} Available
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className={`${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[var(--navy)]">{project.name}</h3>
                        <div className="text-right">
                          <div className="text-[var(--warm-gold)]">{project.priceRange}</div>
                          <div className="text-sm text-[var(--medium-gray)]">{project.pricePerSqFt}/sq ft</div>
                        </div>
                      </div>
                      <div className="flex items-center text-[var(--medium-gray)] text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <p className="text-[var(--medium-gray)] text-sm">{project.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-[var(--vine-green)]" />
                          <span>{project.distanceFromExpressway} from Expressway</span>
                        </div>
                        <div className="flex items-center">
                          <Plane className="w-4 h-4 mr-2 text-[var(--vine-green)]" />
                          <span>{project.distanceFromAirport} from Airport</span>
                        </div>
                      </div>

                      {/* Approvals */}
                      <div className="flex flex-wrap gap-2">
                        {project.approvals.map((approval) => (
                          <Badge key={approval} variant="outline" className="text-xs">
                            {approval}
                          </Badge>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <Badge key={highlight} className="bg-[var(--warm-gold)]/10 text-[var(--navy)] text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-[var(--vine-green)] hover:bg-[var(--vine-green)]/90"
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Brochure
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-[var(--navy)] to-[var(--vine-green)] rounded-2xl text-white"
        >
          <h3 className="text-2xl mb-4">Ready to Invest in Your Future?</h3>
          <p className="mb-6 opacity-90">Schedule a site visit to explore these premium locations in person</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--warm-gold)] text-[var(--navy)] hover:bg-[var(--warm-gold)]/90">
              Schedule Site Visit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--navy)]">
              Chat with Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}