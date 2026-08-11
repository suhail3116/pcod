import React, { useState, useMemo } from 'react';
import { Building2, Search, MapPin, Star, ExternalLink, Filter } from 'lucide-react';

const hospitalsData = [
  // COIMBATORE DISTRICT
  { name: "Rao Hospital", dist: "Coimbatore", spec: "Adolescent & PCOS Clinic", loc: "R.S. Puram", link: "https://www.raohospital.com/", rating: 4.8 },
  { name: "ELCE Clinics", dist: "Coimbatore", spec: "Laparoscopic PCOS Surgery", loc: "Gandhipuram", link: "https://elceclinics.com/", rating: 4.5 },
  { name: "RK Nature Cure Hospital", dist: "Coimbatore", spec: "Naturopathy PCOS Reversal", loc: "Nehru St", link: "https://www.rknature.com/", rating: 4.2 },
  { name: "Sri Ramakrishna Hospital", dist: "Coimbatore", spec: "Endocrine & Gynae Care", loc: "Siddhapudur", link: "https://www.sriramakrishnahospital.com/", rating: 4.6 },

  // CHENNAI DISTRICT
  { name: "Rainbow Children's Hospital", dist: "Chennai", spec: "Multidisciplinary PCOS Care", loc: "Anna Nagar", link: "https://www.rainbowhospitals.in/", rating: 4.7 },
  { name: "Cloudnine Hospital", dist: "Chennai", spec: "Women's Health Specialist", loc: "T Nagar", link: "https://www.cloudninecare.com/", rating: 4.9 },
  { name: "Apollo Women's Hospital", dist: "Chennai", spec: "Comprehensive PCOD Treatment", loc: "Thousand Lights", link: "https://www.apollohospitals.com/", rating: 4.8 },

  // TIRUPPUR DISTRICT
  { name: "Sree Saran Medical Center", dist: "Tiruppur", spec: "PCOS & Infertility Care", loc: "P.N. Road", link: "https://sreesaranmedicalcenter.com/", rating: 4.4 },
  { name: "Apollo Sugar Clinics", dist: "Tiruppur", spec: "PCOS & Endocrine Clinic", loc: "Karuvampalayam", link: "https://apollosugar.com/", rating: 4.3 },
  { name: "Dhanvantri Health Care", dist: "Tiruppur", spec: "PCOD Specialist", loc: "Thennampalayam", link: "https://apollosugar.com/", rating: 4.0 },

  // SALEM DISTRICT
  { name: "Rainbow Hospital", dist: "Salem", spec: "Gynaecology & PCOD care", loc: "Swarnapuri", link: "https://www.rainbowhospitals.in/", rating: 4.5 },
  { name: "Sri Dhanvantari Siddha Clinic", dist: "Salem", spec: "Siddha PCOD Treatment", loc: "Salem North", link: "https://nhm.gov.in/", rating: 4.1 },
  { name: "Goodwill Clinic", dist: "Salem", spec: "Hormonal Imbalance Expert", loc: "Attur", link: "https://nhm.gov.in/", rating: 3.9 },

  // ERODE DISTRICT
  { name: "ARC Fertility Hospital", dist: "Erode", spec: "PCOD & Infertility Specialist", loc: "Perundurai Road", link: "https://www.arcfertility.com/", rating: 4.6 },
  { name: "Sunflower Siddha Clinic", dist: "Erode", spec: "Traditional PCOD Reversal", loc: "Palayapalayam", link: "https://nhm.gov.in/", rating: 4.2 },

  // MADURAI DISTRICT
  { name: "Preethi Hospitals", dist: "Madurai", spec: "Advanced PCOD Diagnosis", loc: "Melur Main Road", link: "https://preethihospitals.com/", rating: 4.6 },
  { name: "ARC International Fertility", dist: "Madurai", spec: "PCOS & IVF Specialists", loc: "KK Nagar", link: "https://www.arcfertility.com/", rating: 4.7 },
  { name: "Apollo Speciality Hospital", dist: "Madurai", spec: "Metabolic & PCOS Diet Clinic", loc: "Lake View Rd", link: "https://www.apollohospitals.com/", rating: 4.8 },

  // TRICHY DISTRICT
  { name: "Apollo Sugar Clinics", dist: "Trichy", spec: "Endocrine & PCOS Care", loc: "Ariyamangalam", link: "https://apollosugar.com/", rating: 4.8 },
  { name: "Iswarya Fertility Centre", dist: "Trichy", spec: "Hormonal & Infertility Care", loc: "Anna Malai Nagar", link: "https://iswaryafetility.com/", rating: 4.8 },
  { name: "Sri Riddhi Clinic", dist: "Trichy", spec: "Gynaecology & PCOD Support", loc: "Rettai Vaikal", link: "https://nhm.gov.in/", rating: 4.9 },

  // VELLORE DISTRICT
  { name: "Saaral Fertility Centre", dist: "Vellore", spec: "Women's Health & PCOD", loc: "Gandhinagar", link: "https://saaralfertility.com/", rating: 4.8 },
  { name: "Sri Narayani Hospital", dist: "Vellore", spec: "Comprehensive Gynae Care", loc: "Vellore Fort", link: "https://www.srinarayani.org/", rating: 4.7 },
  { name: "Palar Multispeciality Hospital", dist: "Vellore", spec: "Holistic PCOD Treatment", loc: "Sathuvachari", link: "https://nhm.gov.in/", rating: 4.5 },

  // THANJAVUR DISTRICT
  { name: "Skanda Fertility Centre", dist: "Thanjavur", spec: "Reproductive & PCOS Care", loc: "Mary's Corner", link: "https://nhm.gov.in/", rating: 4.9 },
  { name: "Janaki Nursing Home", dist: "Thanjavur", spec: "PCOD Problem Management", loc: "Thanjavur City", link: "https://nhm.gov.in/", rating: 4.4 },

  // KANYAKUMARI DISTRICT
  { name: "Caroline John Hospital", dist: "Kanyakumari", spec: "Adolescent Gynae & PCOS", loc: "Cape Road", link: "https://nhm.gov.in/", rating: 4.3 },
  { name: "Gheeth IVF Hospital", dist: "Kanyakumari", spec: "Fertility & PCOD Specialist", loc: "Kaliakkavilai", link: "https://nhm.gov.in/", rating: 4.9 },
  { name: "Ganesamoni Hospital", dist: "Kanyakumari", spec: "PCOD-PCOS Treatments", loc: "Nagercoil", link: "https://nhm.gov.in/", rating: 4.2 },

  // THOOTHUKUDI DISTRICT
  { name: "AVM Hospital", dist: "Thoothukudi", spec: "PCOD & Hormonal Care", loc: "Palayamkottai Road", link: "https://avmhospital.com/", rating: 4.5 },
  { name: "Pearl City Medical Centre", dist: "Thoothukudi", spec: "Adolescent Gynae Clinic", loc: "Chidambara Nagar", link: "https://sarhospitals.com/", rating: 4.3 },
  { name: "Sundaram Arulrhaj Hospital", dist: "Thoothukudi", spec: "Endocrine & PCOD Support", loc: "Tooveypuram", link: "https://sarhospitals.com/", rating: 4.4 },

  // TIRUNELVELI DISTRICT
  { name: "Galaxy Hospital", dist: "Tirunelveli", spec: "Laparoscopic PCOD Specialist", loc: "Palayamkottai", link: "https://galaxyhospital.co.in/", rating: 4.7 },
  { name: "Annai Velankanni Hospital", dist: "Tirunelveli", spec: "Comprehensive Womens Health", loc: "Tirunelveli Junction", link: "https://avhospitals.com/", rating: 4.6 },
  { name: "Rose Mary Mission Hospital", dist: "Tirunelveli", spec: "Infertility & PCOD Care", loc: "Perumalpuram", link: "https://avhospitals.com/", rating: 4.2 },

  // KARUR DISTRICT
  { name: "Amaravathi Hospital", dist: "Karur", spec: "Hormonal Imbalance Expert", loc: "Covai Road", link: "https://nhm.gov.in/", rating: 4.4 },
  { name: "Abirami Hospital", dist: "Karur", spec: "PCOS Management Clinic", loc: "West Pradakshanam", link: "https://nhm.gov.in/", rating: 4.5 },

  // DINDIGUL & POLLACHI
  { name: "Christian Fellowship Hospital", dist: "Dindigul", spec: "Holistic PCOD Treatment", loc: "Oddanchatram", link: "https://cfhospital.org/", rating: 4.8 },
  { name: "NG Hospital", dist: "Pollachi", spec: "Gynaecology & Hormonal Care", loc: "Palakkad Road", link: "https://nghospital.com/", rating: 4.5 },
  { name: "Thangam Hospital", dist: "Namakkal", spec: "PCOD & Laparoscopy", loc: "Thuraiyur Road", link: "https://thangamhospital.com/", rating: 4.6 }
];

export default function FindHospital() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique sorted districts
  const districts = useMemo(() => {
    return Array.from(new Set(hospitalsData.map((h) => h.dist))).sort();
  }, []);

  // Filter logic
  const filteredHospitals = useMemo(() => {
    return hospitalsData.filter((h) => {
      const matchesDistrict = selectedDistrict ? h.dist === selectedDistrict : true;
      const matchesQuery = searchQuery
        ? h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          h.loc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          h.spec.toLowerCase().includes(searchQuery.toLowerCase()) ||
          h.dist.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesDistrict && matchesQuery;
    });
  }, [selectedDistrict, searchQuery]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Healthcare Directory</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800">Find PCOD Specialists & Hospitals</h1>
          <p className="text-slate-500 text-sm mt-1">
            Search for specialized healthcare clinics by District across Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="glass-card rounded-2xl p-4 border border-slate-200/80 bg-white flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm w-full md:w-auto shrink-0">
          <Filter className="w-4 h-4" />
          <span>Filter:</span>
        </div>

        {/* Dropdown */}
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full md:w-64 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
        >
          <option value="">All Districts ({hospitalsData.length} Hospitals)</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d} District
            </option>
          ))}
        </select>

        <span className="hidden md:inline text-slate-300">|</span>

        {/* Text Input */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by hospital name, specialty, or location..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
          />
        </div>
      </div>

      {/* Hospital Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map((h, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-purple-100/80 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 font-semibold text-xs border border-purple-100">
                  <MapPin className="w-3 h-3 text-purple-600" />
                  {h.dist}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{h.rating}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">{h.name}</h3>

              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <p>
                  <strong className="text-slate-700">Specialty:</strong> {h.spec}
                </p>
                <p className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{h.loc}</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open(h.link, '_blank', 'noopener,noreferrer')}
              className="w-full mt-4 py-2.5 px-4 rounded-xl border border-purple-600 text-purple-700 font-semibold text-xs hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <span>View Details & Website</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {filteredHospitals.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-sm">No hospitals found matching your filter criteria.</p>
          <button
            onClick={() => {
              setSelectedDistrict('');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-purple-100 text-purple-700 text-xs font-semibold rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
