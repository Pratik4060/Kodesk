import type { StaticImageData } from "next/image";
import mainImage from "@/assets/images/Services/MainService.png";
import dayPassImage from "@/assets/images/Services/DayPass.png";
import meetingRoomImage from "@/assets/images/Services/MeetingRoom.png";
import privateCabinImage from "@/assets/images/Services/PrivateCabin.png";
import coworkingImage from "@/assets/images/Services/Coworking.png";
import managedOfficeImage from "@/assets/images/Services/ManageOffice.png";
import dedicatedDeskImage from "@/assets/images/Services/DedicatedDesk.png";
import eventSpaceImage from "@/assets/images/Services/EventSpace.png";
import virtualOfficeImage from "@/assets/images/Services/Subtract.png";
import podcastImage from "@/assets/images/Services/Podcast.png";
import flexibleSeatingImage from "@/assets/images/Services/FlexibleSeating.png";
import dayPassCutImage from "@/assets/images/Services/cut/DayPass.png";
import meetingRoomCutImage from "@/assets/images/Services/cut/Meeting.png";
import privateCabinCutImage from "@/assets/images/Services/cut/private.png";
import coworkingCutImage from "@/assets/images/Services/cut/Coworking.png";
import managedOfficeCutImage from "@/assets/images/Services/cut/Managed.png";
import dedicatedDeskCutImage from "@/assets/images/Services/cut/DedicatedDesk.png";
import eventSpaceCutImage from "@/assets/images/Services/Subtract.png";
import virtualOfficeCutImage from "@/assets/images/Services/cut/Virtual.png";
import podcastCutImage from "@/assets/images/Services/cut/Podcast.png";
import flexibleSeatingCutImage from "@/assets/images/Services/cut/Flexible Sitting.png";
import dayPassNavIcon from "@/assets/icons/navbar/Services/Daypass.png";
import coworkingNavIcon from "@/assets/icons/navbar/Services/coworking.png";
import dedicatedNavIcon from "@/assets/icons/navbar/Services/dedicated.png";
import eventNavIcon from "@/assets/icons/navbar/Services/Event.png";
import managedNavIcon from "@/assets/icons/navbar/Services/managed.png";
import vectorNavIcon from "@/assets/icons/navbar/Services/Vector.png";
import virtualNavIcon from "@/assets/icons/navbar/Services/virtual.png";

export type ServiceSlug =
  | "day-pass"
  | "meeting-room"
  | "private-cabin"
  | "coworking-space"
  | "managed-office"
  | "dedicated-desk"
  | "event-space"
  | "virtual-office"
  | "podcast-studio"
  | "flexible-seating";

export type ServiceItem = {
  slug: ServiceSlug;
  label: string;
  shortLabel: string;
  pdfTitle: string;
  description: string;
  image: StaticImageData;
  galleryImage: StaticImageData;
  accent: string;
  features: string[];
};

export type ServiceDetailContent = {
  heroDescription: string;
  overviewTitle: string;
  overviewBody: string;
  audienceTitle: string;
  audience: string[];
  benefits: string[];
  features: {
    title: string;
    copy: string;
  }[];
  ctaTitle: string;
  ctaBody: string;
  relatedSlugs: ServiceSlug[];
};

export const serviceNavItems = [
  { slug: "day-pass", label: "Day pass", icon: dayPassNavIcon },
  { slug: "meeting-room", label: "Meeting Room" },
  { slug: "private-cabin", label: "Private Cabin" },
  { slug: "coworking-space", label: "Coworking Space", icon: coworkingNavIcon },
  { slug: "managed-office", label: "Managed Office", icon: managedNavIcon },
  { slug: "dedicated-desk", label: "Dedicated Desk", icon: dedicatedNavIcon },
  { slug: "event-space", label: "Event Space", icon: eventNavIcon },
  { slug: "virtual-office", label: "Virtual Office", icon: virtualNavIcon },
  { slug: "podcast-studio", label: "Podcast Studio", icon: vectorNavIcon },
  { slug: "flexible-seating", label: "Flexible Seating" },
] as const;

export const services: ServiceItem[] = [
  {
    slug: "day-pass",
    label: "Day pass",
    shortLabel: "Day pass",
    pdfTitle: "Day Pass",
    description:
      "Ideal for remote professionals, travelers, and founders who need a polished workspace for a day.",
    image: dayPassImage,
    galleryImage: dayPassCutImage,
    accent: "from-[#ff8a24] to-[#24316d]",
    features: ["Flexible access", "Fast Wi-Fi", "Lounge seating", "Tea and coffee"],
  },
  {
    slug: "meeting-room",
    label: "Meeting Room",
    shortLabel: "Meeting Room",
    pdfTitle: "Meeting Room / Conference Room",
    description:
      "Private meeting spaces for client presentations, planning sessions, and team workshops.",
    image: meetingRoomImage,
    galleryImage: meetingRoomCutImage,
    accent: "from-[#24316d] to-[#5d63d1]",
    features: ["Presentation screen", "Boardroom setup", "Whiteboard wall", "On-demand booking"],
  },
  {
    slug: "private-cabin",
    label: "Private Cabin",
    shortLabel: "Private Cabin",
    pdfTitle: "Private Cabin",
    description:
      "A fully private, quiet environment for leadership teams and client-facing work.",
    image: privateCabinImage,
    galleryImage: privateCabinCutImage,
    accent: "from-[#ff8a24] to-[#3555ff]",
    features: ["Quiet focus", "Lockable space", "Dedicated storage", "Flexible layouts"],
  },
  {
    slug: "coworking-space",
    label: "Coworking Space",
    shortLabel: "Coworking Space",
    pdfTitle: "Coworking Space",
    description:
      "A vibrant open plan space that encourages collaboration without compromising comfort.",
    image: coworkingImage,
    galleryImage: coworkingCutImage,
    accent: "from-[#5d63d1] to-[#24316d]",
    features: ["Open seating", "Collaborative zones", "High-speed internet", "Community energy"],
  },
  {
    slug: "managed-office",
    label: "Managed Office",
    shortLabel: "Managed Office",
    pdfTitle: "Managed Office",
    description:
      "Tailored office suites managed end-to-end so your team can stay focused on growth.",
    image: managedOfficeImage,
    galleryImage: managedOfficeCutImage,
    accent: "from-[#24316d] to-[#ff8a24]",
    features: ["Custom fit-out", "Operations support", "Dedicated cabins", "Scalable plans"],
  },
  {
    slug: "dedicated-desk",
    label: "Dedicated Desk",
    shortLabel: "Dedicated Desk",
    pdfTitle: "Dedicated Desk",
    description:
      "Your own consistent workspace inside a premium coworking environment.",
    image: dedicatedDeskImage,
    galleryImage: dedicatedDeskCutImage,
    accent: "from-[#3555ff] to-[#5d63d1]",
    features: ["Reserved desk", "Personal storage", "24/7 access", "Member perks"],
  },
  {
    slug: "event-space",
    label: "Event Space",
    shortLabel: "Event Space",
    pdfTitle: "Event Space",
    description:
      "A flexible venue for networking events, launches, team offsites, and community gatherings.",
    image: eventSpaceImage,
    galleryImage: eventSpaceCutImage,
    accent: "from-[#ff8a24] to-[#3555ff]",
    features: ["Open lounge", "AV-friendly", "Event-friendly seating", "Brand activations"],
  },
  {
    slug: "virtual-office",
    label: "Virtual Office",
    shortLabel: "Virtual Office",
    pdfTitle: "Virtual Office",
    description:
      "Professional business presence and mailing support without the need for a full-time desk.",
    image: virtualOfficeImage,
    galleryImage: virtualOfficeCutImage,
    accent: "from-[#24316d] to-[#5d63d1]",
    features: ["Business address", "Mail handling", "Call support", "Flexible upgrades"],
  },
  {
    slug: "podcast-studio",
    label: "Podcast Studio",
    shortLabel: "Podcast Studio",
    pdfTitle: "Podcast Studio",
    description:
      "A quiet, production-ready room for recording conversations, interviews, and branded audio.",
    image: podcastImage,
    galleryImage: podcastCutImage,
    accent: "from-[#3555ff] to-[#ff8a24]",
    features: ["Recording setup", "Acoustic comfort", "Creator friendly", "Private sessions"],
  },
  {
    slug: "flexible-seating",
    label: "Flexible Seating",
    shortLabel: "Flexible Seating",
    pdfTitle: "Flexible Seating",
    description:
      "Hot desks and lounge-like seating that adapt to the way your team works each day.",
    image: flexibleSeatingImage,
    galleryImage: flexibleSeatingCutImage,
    accent: "from-[#24316d] to-[#3555ff]",
    features: ["Drop-in seating", "Team flexibility", "Quiet corners", "Membership options"],
  },
];

export const serviceDetailContent: Record<ServiceSlug, ServiceDetailContent> = {
  "day-pass": {
    heroDescription:
      "One-day access to the full Kodesk workspace, perfect for occasional visits, client days, or a focused change of scenery.",
    overviewTitle: "What is Day Pass?",
    overviewBody:
      "The Kodesk Day Pass is the easiest way to experience the workspace without a commitment. Walk in on any working day, pick a seat, and enjoy the full range of amenities for a productive day outside your home or hotel.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Out-of-town business travellers",
      "Professionals evaluating a long-term membership",
      "Remote workers needing an occasional office day",
      "Students and researchers needing a focused space",
      "Entrepreneurs attending meetings nearby",
    ],
    benefits: [
      "Full access to shared workspace for one day",
      "High-speed Wi-Fi and power access at every seat",
      "Complimentary tea, coffee, and pantry service",
      "Access to printing and scanning services",
      "Common area and lounge access throughout the day",
      "No membership or registration required",
    ],
    features: [
      {
        title: "Walk-In Available",
        copy: "No advance booking required - subject to seat availability",
      },
      {
        title: "Full Amenity Access",
        copy: "Use everything from the printer to the terrace lounge",
      },
      {
        title: "Discounted Meeting Rooms",
        copy: "Day-pass holders get 20% off meeting room bookings",
      },
      {
        title: "Complimentary Beverages",
        copy: "Unlimited tea, coffee, and filtered water all day",
      },
      {
        title: "Guest Wi-Fi",
        copy: "Fast and secure internet on the day-pass guest network",
      },
      {
        title: "Pay at Reception",
        copy: "Simple cash, card, or UPI payment at the front desk",
      },
    ],
    ctaTitle: "Ready to Experience Day Pass?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["event-space", "podcast-studio", "private-cabin"],
  },
  "coworking-space": {
    heroDescription:
      "Vibrant shared workspaces designed for productivity, creativity, and professional networking.",
    overviewTitle: "What is Coworking Space?",
    overviewBody:
      "Kodesk's coworking spaces are thoughtfully designed open-floor environments that bring together professionals from diverse industries. Whether you're a freelancer seeking focus, a remote team needing a collaborative hub, or an entrepreneur building your next venture, our coworking floors offer the energy, infrastructure, and community you need to perform at your best.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Freelancers & independent professionals",
      "Remote workers and digital nomads",
      "Early-stage startups and founders",
      "Small distributed teams",
      "Creative professionals and consultants",
    ],
    benefits: [
      "Energetic, collaborative atmosphere",
      "Access to high-speed fibre internet",
      "Complimentary beverages and pantry",
      "Ergonomic seating and sit-stand desks",
      "Networking events and community meetups",
      "Access to printing, scanning, and lockers",
    ],
    features: [
      {
        title: "Hot Desks Available",
        copy: "Flexible first-come seating across open workspaces",
      },
      {
        title: "High-Speed Wi-Fi",
        copy: "1 Gbps fibre broadband with secure private networks",
      },
      {
        title: "Community Lounge",
        copy: "Relaxed breakout zones for informal collaboration",
      },
      {
        title: "24/7 Access",
        copy: "Keycard access round the clock on premium plans",
      },
      {
        title: "Event Calendar",
        copy: "Monthly workshops, networking nights, and skill sessions",
      },
      {
        title: "Dedicated Support",
        copy: "On-site community manager for daily assistance",
      },
    ],
    ctaTitle: "Discover a Workspace That Fits Your Business",
    ctaBody:
      "Book a free tour and our workspace consultants will help you find the perfect solution for your team.",
    relatedSlugs: ["managed-office", "flexible-seating", "dedicated-desk"],
  },
  "meeting-room": {
    heroDescription:
      "State-of-the-art meeting and conference rooms available by the hour for teams of all sizes.",
    overviewTitle: "What is Meeting Room / Conference Room?",
    overviewBody:
      "Kodesk's meeting and conference rooms are equipped with the latest AV technology, high-speed connectivity, and premium furnishings. From intimate client calls to large boardroom presentations, we have the right room size and setup. Book online in advance or grab a room on-the-spot - it's that simple.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Client presentations and business pitches",
      "Team strategy meetings and workshops",
      "HR interviews and performance reviews",
      "Training sessions and onboarding",
      "Investor and board-level discussions",
    ],
    benefits: [
      "Multiple room sizes from 4 to 30 participants",
      "4K display screens and video conferencing",
      "Noise-insulated acoustic walls",
      "High-speed dedicated meeting room internet",
      "Complimentary whiteboard and stationery",
      "Catering and beverage service on request",
    ],
    features: [
      {
        title: "Hourly Booking",
        copy: "Reserve rooms from 1 hour with online or app-based booking",
      },
      {
        title: "4K Display & AV",
        copy: "Ultra-HD screens with HDMI, wireless casting, and built-in speakers",
      },
      {
        title: "Video Conferencing",
        copy: "Zoom, Teams, and Google Meet ready with HD cameras",
      },
      {
        title: "Acoustic Insulation",
        copy: "Soundproof walls ensuring complete meeting privacy",
      },
      {
        title: "Stationery & Whiteboard",
        copy: "Markers, flip charts, and printed pads always stocked",
      },
      {
        title: "Receptionist Support",
        copy: "Visitor registration and welcome service for your guests",
      },
    ],
    ctaTitle: "Ready to Experience Meeting Room / Conference Room?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["event-space", "virtual-office", "podcast-studio"],
  },
  "private-cabin": {
    heroDescription:
      "Enclosed private cabins for 1-8 people - perfect for focused work and confidential conversations.",
    overviewTitle: "What is Private Cabin?",
    overviewBody:
      "Kodesk Private Cabins offer the perfect balance between a secluded private office and the energy of a coworking floor. These fully enclosed, glass-fronted offices come in sizes from 1 to 8 seats, giving small teams and senior professionals a quiet, professional, and lockable space while still being part of the larger Kodesk community and sharing all common amenities.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Senior executives and CXOs needing private workspace",
      "Legal, finance, and consulting professionals",
      "Small teams of 2-8 needing an enclosed office",
      "Businesses handling confidential client work",
      "Founders wanting focus without isolation",
    ],
    benefits: [
      "Fully enclosed and lockable private office",
      "Glass-fronted design balancing privacy and community",
      "Available in 1, 2, 4, and 8-seat configurations",
      "All common amenities included",
      "Customizable interiors and branding options",
      "Month-to-month or annual lease terms",
    ],
    features: [
      {
        title: "Lockable Glass Office",
        copy: "Floor-to-ceiling glass with privacy film and lockable door",
      },
      {
        title: "Ergonomic Furniture",
        copy: "Premium desks, executive chairs, and task lighting included",
      },
      {
        title: "Dedicated Internet Port",
        copy: "Hardwired LAN port in addition to Wi-Fi for maximum speed",
      },
      {
        title: "Intercom & Signage",
        copy: "Internal phone and nameplate holder outside your cabin",
      },
      {
        title: "Climate Control",
        copy: "Individual AC vent control for personalized comfort",
      },
      {
        title: "Shared Amenity Access",
        copy: "Full access to lounges, meeting rooms, and pantry",
      },
    ],
    ctaTitle: "Ready to Experience Day Pass?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["event-space", "podcast-studio", "coworking-space"],
  },
  "managed-office": {
    heroDescription:
      "Fully furnished, branded private offices managed end-to-end - move in and focus on your business.",
    overviewTitle: "What is Managed Office?",
    overviewBody:
      "Kodesk Managed Offices deliver a completely turn-key workspace solution. From interior fit-out and IT infrastructure to housekeeping and office management - we handle everything so your team can focus exclusively on growing the business. Customize the space with your brand identity while we take care of every operational detail.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Mid-size companies and enterprises",
      "MNCs setting up India offices",
      "Growing tech teams (10-200 people)",
      "Companies seeking rapid deployment",
      "Creative professionals and consultants",
    ],
    benefits: [
      "Fully customizable interiors with brand signage",
      "Plug-and-play IT infrastructure",
      "Dedicated server rack and network setup",
      "Professional housekeeping daily",
      "Flexible term options (3, 6, or 12 months)",
      "Scalable from 5 to 200+ seats",
    ],
    features: [
      {
        title: "Custom Branding",
        copy: "Lobby signage, interiors, and reception branded to your company",
      },
      {
        title: "Turnkey Fit-Out",
        copy: "Furniture, partitions, and acoustics designed for your workflow",
      },
      {
        title: "Dedicated Internet",
        copy: "Leased-line connectivity with SLA-backed uptime",
      },
      {
        title: "Meeting Rooms Included",
        copy: "Private meeting rooms within your floor allocation",
      },
      {
        title: "Facilities Team",
        copy: "Dedicated FM team ensuring seamless daily operations",
      },
      {
        title: "Scalable Space",
        copy: "Expand or contract seats as your headcount changes",
      },
    ],
    ctaTitle: "Ready to Experience Managed Office?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["coworking-space", "flexible-seating", "dedicated-desk"],
  },
  "dedicated-desk": {
    heroDescription:
      "A reserved workstation that's exclusively yours - personalize it and arrive ready to work every day.",
    overviewTitle: "What is Dedicated Desk?",
    overviewBody:
      "A Kodesk Dedicated Desk gives you ownership of a fixed workstation in our premium open-plan office. Personalize your setup with monitors, accessories, and personal items - it's your space every single working day. Combine the stability of a private desk with the energy and community of a shared workspace environment.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Full-time professionals needing daily workspace",
      "Freelancers and consultants on long-term projects",
      "Small business owners wanting a professional base",
      "Remote employees needing a stable office alternative",
      "Startup founders building their core team",
    ],
    benefits: [
      "Reserved desk - always available when you arrive",
      "Personalize with your own equipment and decor",
      "Locked pedestal for secure daily storage",
      "Consistent workspace without daily hot-desk hunting",
      "Full access to all shared amenities",
      "Monthly and annual billing options available",
    ],
    features: [
      {
        title: "Fixed Workstation",
        copy: "Named desk reserved exclusively for you each working day",
      },
      {
        title: "Dual Monitor Support",
        copy: "Power outlets and monitor mounts included at every desk",
      },
      {
        title: "Locked Pedestal",
        copy: "Personal under-desk storage cabinet with key access",
      },
      {
        title: "Priority Booking",
        copy: "Meeting room booking credits included with the plan",
      },
      {
        title: "Business Address",
        copy: "Use Kodesk's address on your business collateral",
      },
      {
        title: "24/7 Keycard Access",
        copy: "Access your desk any time - even on weekends",
      },
    ],
    ctaTitle: "Ready to Experience Dedicated Desk?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["flexible-seating", "meeting-room", "event-space"],
  },
  "event-space": {
    heroDescription:
      "A versatile, fully-equipped event venue for workshops, seminars, product launches, and corporate gatherings.",
    overviewTitle: "What is Meeting Room / Conference Room?",
    overviewBody:
      "Kodesk's event space transforms to fit any gathering - from intimate founder meetups to large-scale corporate conferences. With professional AV setup, flexible seating arrangements, and dedicated event coordination support, we ensure every event runs flawlessly and leaves a lasting impression on your attendees.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Corporate training and offsite events",
      "Product launches and brand activations",
      "Networking sundowners and community events",
      "Workshops, bootcamps, and seminars",
    ],
    benefits: [
      "Capacity for 50 to 200+ attendees",
      "Modular seating for theatre, classroom, or banquet layouts",
      "Professional-grade AV and stage lighting",
      "Dedicated event coordinator on the day",
      "Built-in stage and podium",
      "On-site catering arrangements available",
    ],
    features: [
      {
        title: "Flexible Layout",
        copy: "Theatre, classroom, U-shape, banquet - set to your event format",
      },
      {
        title: "Stage & Podium",
        copy: "Raised stage with professional lectern and microphone",
      },
      {
        title: "Professional AV",
        copy: "Projectors, LED walls, surround sound, and stage lighting rigs",
      },
      {
        title: "Event Coordination",
        copy: "Dedicated coordinator to manage logistics on the day",
      },
      {
        title: "Branding Opportunities",
        copy: "Custom banners, digital signage, and branded photo walls",
      },
      {
        title: "Catering Options",
        copy: "Visitor registration and welcome service for your guests",
      },
    ],
    ctaTitle: "Ready to Experience Meeting Room / Conference Room?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["event-space", "virtual-office", "podcast-studio"],
  },
  "virtual-office": {
    heroDescription:
      "Establish a professional business presence with a premium Pune address, mail handling, and support services.",
    overviewTitle: "What is Virtual Office?",
    overviewBody:
      "A Kodesk Virtual Office gives your business a credible, professional presence without the cost of a full-time physical office. Use our premium Baner, Pune address on your website, business cards, GST registration, and all official correspondence. Combine this with our mail management and call-handling services for a complete remote office setup.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Bootstrapped startups keeping costs lean",
      "Remote-first companies needing a local address",
      "International businesses entering the Indian market",
      "Freelancers projecting a professional image",
      "E-commerce businesses requiring a registered address",
    ],
    benefits: [
      "Premium Baner, Pune registered business address",
      "Suitable for GST and company registration",
      "Physical mail collection, scanning, and forwarding",
      "Professional call answering in your company name",
      "Complimentary meeting room hours per month",
      "Day-pass access for occasional in-office days",
    ],
    features: [
      {
        title: "Business Address",
        copy: "Use Kodesk's prestigious Pune address on all official documents",
      },
      {
        title: "GST Registration",
        copy: "Address valid for GST, MSME, and company incorporation filings",
      },
      {
        title: "Mail Handling",
        copy: "Mail received, scanned, and forwarded or notified digitally",
      },
      {
        title: "Call Answering",
        copy: "Receptionist answers calls in your company name during business hours",
      },
      {
        title: "Meeting Credits",
        copy: "Included monthly meeting room hours for in-person needs",
      },
      {
        title: "Day-Pass Access",
        copy: "Walk in and work on-site whenever you need a physical desk",
      },
    ],
    ctaTitle: "Ready to Experience Virtual Office?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["event-space", "podcast-studio", "day-pass"],
  },
  "podcast-studio": {
    heroDescription:
      "A fully equipped soundproofed podcast and content creation studio available for hourly bookings.",
    overviewTitle: "What is Virtual Office?",
    overviewBody:
      "Kodesk's Podcast Studio is a professional-grade recording environment built for creators, marketers, and business leaders. From solo podcast recordings and video interviews to webinar broadcasts and voiceover production, the studio gives you broadcast-quality output without investing in your own setup. Book by the hour and walk in ready to create.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Podcast hosts and content creators",
      "Business leaders recording thought leadership content",
      "Marketing teams producing branded video content",
      "Trainers recording e-learning modules",
      "Journalists and media professionals",
    ],
    benefits: [
      "Acoustically treated soundproof studio",
      "Professional condenser microphones (up to 4 seats)",
      "DSLR cameras and studio lighting rig",
      "Dedicated mixing console and audio interface",
      "High-speed internet for live streaming",
      "Post-production editing suite access",
    ],
    features: [
      {
        title: "Acoustic Studio",
        copy: "Use Kodesk's prestigious Pune address on all official documents",
      },
      {
        title: "Condenser Mics",
        copy: "Up to 4 Shure or Rode XLR microphones with pop filters",
      },
      {
        title: "Video Setup",
        copy: "DSLR cameras, ring lights, and LED panels for crisp video",
      },
      {
        title: "Live Streaming Ready",
        copy: "OBS/Streamyard setup for YouTube, LinkedIn, and Instagram Live",
      },
      {
        title: "Editing Suite",
        copy: "iMac workstation with Adobe Premiere and Audition installed",
      },
      {
        title: "Hourly Booking",
        copy: "Book as little as 1 hour with no minimum commitment",
      },
    ],
    ctaTitle: "Ready to Experience Podcast Studio?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["event-space", "podcast-studio", "day-pass"],
  },
  "flexible-seating": {
    heroDescription:
      "Choose any available seat across the workspace floor without a fixed assignment.",
    overviewTitle: "What is Flexible Seating?",
    overviewBody:
      "Flexible seating at Kodesk offers the ultimate freedom of movement. Book through our app each morning, pick any open workstation, and enjoy a fully equipped desk for the day. Ideal for professionals who travel frequently or teams that follow a hybrid working model and don't need a permanent desk every day.",
    audienceTitle: "Who Is This For ?",
    audience: [
      "Hybrid workers visiting 2-3 days a week",
      "Business travellers needing a day workspace",
      "Freelancers on flexible schedules",
      "Teams with rotating shift patterns",
      "Professionals testing the space before committing",
    ],
    benefits: [
      "No fixed desk commitment required",
      "Book seats via mobile app in seconds",
      "Access any open workstation on the floor",
      "Full amenity access included",
      "Cost-effective for hybrid workers",
      "Change zones based on the day's work mode",
    ],
    features: [
      {
        title: "App-Based Booking",
        copy: "Reserve your seat in advance via the Kodesk member app",
      },
      {
        title: "Multiple Zones",
        copy: "Silent focus zones, collaborative open areas, and lounge spaces",
      },
      {
        title: "Locker Access",
        copy: "Daily-use lockers to store your belongings securely",
      },
      {
        title: "Fast Wi-Fi",
        copy: "Automatic network access upon check-in",
      },
      {
        title: "Credit System",
        copy: "Pay-as-you-go credits for maximum cost efficiency",
      },
      {
        title: "Open 7 Days",
        copy: "Workspace available Monday-Saturday with extended hours",
      },
    ],
    ctaTitle: "Ready to Experience Flexible Seating?",
    ctaBody:
      "Schedule a free tour and see the space for yourself. Our team is ready to help you get set up.",
    relatedSlugs: ["coworking-space", "managed-office", "dedicated-desk"],
  },
};

export const servicesOverview = {
  title: "Services",
  subtitle: "Choose the space that fits the way you work.",
  description:
    "Swipe through the Kodesk service categories to explore focused work zones, meeting spaces, and flexible workspace options.",
  image: mainImage,
};

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
