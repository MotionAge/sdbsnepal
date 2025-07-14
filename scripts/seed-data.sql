-- Seed data for SDB Nepal website
-- Run this after setting up the main database schema

-- Insert sample blogs
INSERT INTO blogs (title, content, excerpt, category, author, status, featured, image_url) VALUES
('Annual General Assembly 2024 - Important Announcements', 
'We are pleased to announce our Annual General Assembly for 2024, scheduled for March 15th at our main premises in Thali, Kathmandu. This year''s assembly will focus on reviewing our achievements, discussing future plans, and electing new committee members.

Key agenda items include:
- Review of 2023 activities and financial reports
- Presentation of new project proposals
- Election of executive committee members
- Discussion on membership expansion
- Q&A session with community members

All lifetime and annual members are cordially invited to participate. Light refreshments will be provided.

For more information, please contact our office at 9843549625.',
'Join us for our annual general assembly where we will discuss achievements, future plans, and elect new committee members.',
'press-releases', 'SDB Nepal Admin', 'published', true, 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800'),

('New Orphanage Facility Inauguration - A Milestone Achievement',
'We are thrilled to announce the successful completion and inauguration of our new orphanage facility in Bhaktapur. This state-of-the-art facility can accommodate 50 children and includes modern amenities such as:

- Spacious dormitories with proper ventilation
- Well-equipped classrooms for education
- Recreation areas for physical activities
- Medical facility with qualified staff
- Kitchen and dining hall
- Library and study rooms

The inauguration ceremony was attended by local dignitaries, donors, and community members. We extend our heartfelt gratitude to all supporters who made this project possible.

This facility represents our commitment to providing quality care and education to orphaned children in Nepal.',
'Beautiful moments captured during the inauguration of our new orphanage facility in Bhaktapur.',
'galleries', 'Photo Team', 'published', true, 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'),

('Community Voting: Next Project Location - Your Voice Matters',
'We believe in community-driven decision making. Help us decide the location for our next major welfare project by participating in our community voting initiative.

Options under consideration:
1. Rural Healthcare Center in Sindhupalchok
2. Educational Facility in Dolakha  
3. Elder Care Center in Lalitpur
4. Community Center in Makwanpur

Voting is open to all lifetime and annual members. Each option has been carefully evaluated based on:
- Community need assessment
- Accessibility and infrastructure
- Long-term sustainability
- Available resources and partnerships

Cast your vote by visiting our office or through our online portal. Voting closes on February 28th, 2024.',
'Help us decide the location for our next community welfare project. Your vote matters!',
'voting-polling', 'Project Team', 'published', false, 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800'),

('Sanskrit Translation Project Milestone - 50 Texts Completed',
'We are proud to announce a significant milestone in our Sanskrit Translation Project. Our dedicated research team has successfully completed the translation of 50 ancient Sanskrit texts into modern Nepali and English.

Completed translations include:
- 15 Upanishads with detailed commentary
- 12 Stotra collections
- 8 Philosophical treatises
- 10 Ritual and ceremonial texts
- 5 Historical manuscripts

These translations are now available in our digital library and will soon be published in print format. The project aims to make ancient wisdom accessible to modern readers while preserving the original essence and meaning.

Special thanks to our translation team led by Dr. Sita Devi and supported by Sanskrit scholars from various universities.',
'We have successfully completed the translation of 50 ancient Sanskrit texts into modern Nepali and English.',
'project-updates', 'Research Team', 'published', false, 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'),

('Upcoming Cultural Festival - Sanatan Dharma Celebration',
'Mark your calendars! SDB Nepal is organizing a grand cultural festival celebrating Sanatan Dharma traditions and values. The three-day festival will feature:

Day 1: Traditional Music and Dance Performances
- Classical Nepali folk dances
- Devotional music concerts
- Children''s cultural programs

Day 2: Spiritual Discourses and Workshops
- Lectures on Vedic philosophy
- Meditation and yoga sessions
- Sanskrit learning workshops

Day 3: Community Feast and Cultural Exhibition
- Traditional Nepali cuisine
- Art and craft exhibitions
- Book fair and cultural displays

Entry is free for all community members. Volunteers are welcome to help with organization. Contact us to register as a volunteer.',
'Join us for a grand cultural festival celebrating Sanatan Dharma traditions and values.',
'event-releases', 'Event Team', 'published', true, 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800'),

('Membership Drive 2024 - Special Benefits and Discounts',
'Join the SDB Nepal family during our special membership drive! New members registering in February 2024 will receive exclusive benefits:

Lifetime Membership Benefits:
- 20% discount on membership fee
- Complimentary SDB Nepal merchandise
- Priority access to all events
- Voting rights in general assembly
- Annual recognition certificate

Annual Membership Benefits:
- 15% discount on first year
- Free access to library resources
- Event notifications and updates
- Community networking opportunities

Monthly Membership Benefits:
- Flexible payment options
- Basic library access
- Volunteer opportunities
- Community participation

Don''t miss this opportunity to be part of our mission to preserve culture and serve humanity.',
'Special membership benefits and discounts available for new members joining this month.',
'promotions', 'Membership Team', 'published', false, 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800');

-- Insert sample members
INSERT INTO members (name, email, phone, address, membership_type, occupation, date_of_birth, join_date, status, avatar_url) VALUES
('Ram Bahadur Sharma', 'ram.sharma@email.com', '9841234567', 'Kathmandu-15, Thamel', 'lifetime', 'Teacher', '1975-05-15', '2023-01-15', 'active', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'),
('Sita Devi Thapa', 'sita.thapa@email.com', '9851234567', 'Lalitpur-08, Patan', 'annual', 'Social Worker', '1980-08-22', '2023-03-20', 'active', 'https://images.unsplash.com/photo-1494790108755-2616c9c0b8b3?w=150'),
('Hari Prasad Gautam', 'hari.gautam@email.com', '9861234567', 'Bhaktapur-12, Durbar Square', 'monthly', 'Business Owner', '1970-12-10', '2023-06-10', 'active', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'),
('Kamala Shrestha', 'kamala.shrestha@email.com', '9871234567', 'Kathmandu-32, Balaju', 'lifetime', 'Retired Government Officer', '1965-03-08', '2022-11-05', 'active', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'),
('Bishnu Prasad Poudel', 'bishnu.poudel@email.com', '9881234567', 'Pokhara-15, Lakeside', 'annual', 'Engineer', '1985-07-18', '2023-08-18', 'active', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'),
('Gita Rani Joshi', 'gita.joshi@email.com', '9891234567', 'Chitwan-10, Bharatpur', 'monthly', 'Doctor', '1978-11-25', '2023-09-22', 'active', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'),
('Mohan Bahadur KC', 'mohan.kc@email.com', '9801234567', 'Butwal-11, Traffic Chowk', 'lifetime', 'Businessman', '1972-04-12', '2023-02-14', 'active', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150'),
('Laxmi Devi Pant', 'laxmi.pant@email.com', '9811234567', 'Dharan-17, Hospital Road', 'annual', 'Nurse', '1982-09-30', '2023-05-08', 'active', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150'),
('Rajesh Kumar Acharya', 'rajesh.acharya@email.com', '9821234567', 'Biratnagar-12, Main Road', 'monthly', 'Priest', '1968-01-20', '2023-07-15', 'active', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150'),
('Sunita Maharjan', 'sunita.maharjan@email.com', '9831234567', 'Kirtipur-05, Naya Bazaar', 'annual', 'Artist', '1988-06-14', '2023-10-12', 'active', 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150');

-- Insert sample donations
INSERT INTO donations (donor_name, donor_email, donor_phone, amount, currency, purpose, payment_method, transaction_id, status, anonymous) VALUES
('Ram Bahadur Sharma', 'ram.sharma@email.com', '9841234567', 25000.00, 'NPR', 'orphanage-support', 'bank-transfer', 'TXN001234567', 'completed', false),
('Anonymous Donor', '', '', 100000.00, 'NPR', 'emergency-relief', 'esewa', 'ESW987654321', 'completed', true),
('Sita Devi Thapa', 'sita.thapa@email.com', '9851234567', 5000.00, 'NPR', 'cultural-preservation', 'khalti', 'KHT456789123', 'completed', false),
('Rajesh Kumar Acharya', 'rajesh.acharya@email.com', '9821234567', 15000.00, 'NPR', 'education', 'bank-transfer', 'TXN789123456', 'completed', false),
('Sunita Maharjan', 'sunita.maharjan@email.com', '9831234567', 7500.00, 'NPR', 'healthcare', 'ime-pay', 'IME321654987', 'completed', false),
('Deepak Shrestha', 'deepak.shrestha@email.com', '9845678901', 20000.00, 'NPR', 'cultural-preservation', 'bank-transfer', 'TXN654321789', 'completed', false),
('Kamala Shrestha', 'kamala.shrestha@email.com', '9871234567', 50000.00, 'NPR', 'old-age-care', 'cash', 'CASH001', 'completed', false),
('Hari Prasad Gautam', 'hari.gautam@email.com', '9861234567', 1200.00, 'NPR', 'general-support', 'esewa', 'ESW123789456', 'completed', false),
('Bishnu Prasad Poudel', 'bishnu.poudel@email.com', '9881234567', 8000.00, 'NPR', 'education', 'khalti', 'KHT789456123', 'completed', false),
('Gita Rani Joshi', 'gita.joshi@email.com', '9891234567', 600.00, 'NPR', 'general-support', 'ime-pay', 'IME987654321', 'completed', false),
('Mohan Bahadur KC', 'mohan.kc@email.com', '9801234567', 35000.00, 'NPR', 'orphanage-support', 'bank-transfer', 'TXN147258369', 'completed', false),
('Anonymous Donor', '', '', 12000.00, 'NPR', 'healthcare', 'esewa', 'ESW741852963', 'completed', true);

-- Insert sample gallery items
INSERT INTO gallery (title, description, image_url, category, tags) VALUES
('Ancient Pashupatinath Temple', 'Beautiful architecture of the sacred Pashupatinath Temple showcasing traditional Nepali craftsmanship', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800', 'temple-architecture', ARRAY['temple', 'architecture', 'heritage', 'pashupatinath']),
('Dashain Festival Celebration', 'Community members celebrating Dashain festival with traditional rituals and ceremonies', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'cultural-festivals', ARRAY['dashain', 'festival', 'celebration', 'community']),
('Traditional Thangka Painting', 'Exquisite Thangka painting depicting Buddhist deities created by local artists', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'traditional-art', ARRAY['thangka', 'painting', 'art', 'buddhist']),
('Orphanage Inauguration Ceremony', 'Grand opening ceremony of our new orphanage facility with community leaders and donors', 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800', 'community-events', ARRAY['orphanage', 'inauguration', 'ceremony', 'community']),
('Sanskrit Manuscript Collection', 'Ancient Sanskrit manuscripts preserved in our library showcasing historical texts', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800', 'projects', ARRAY['sanskrit', 'manuscript', 'library', 'preservation']),
('Tihar Light Festival', 'Beautiful display of lights during Tihar festival celebration at our premises', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'cultural-festivals', ARRAY['tihar', 'lights', 'festival', 'celebration']),
('Traditional Wood Carving', 'Intricate wood carving work on temple doors showing masterful craftsmanship', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800', 'traditional-art', ARRAY['wood', 'carving', 'craftsmanship', 'temple']),
('Community Health Camp', 'Free health checkup camp organized for rural communities with medical professionals', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800', 'community-events', ARRAY['health', 'camp', 'medical', 'community']),
('Gurukula Education System', 'Traditional gurukula education system being implemented for holistic learning', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', 'projects', ARRAY['gurukula', 'education', 'traditional', 'learning']),
('Janai Purnima Ceremony', 'Sacred thread ceremony during Janai Purnima with traditional rituals and prayers', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'ceremonies', ARRAY['janai', 'purnima', 'ceremony', 'sacred']),
('Stone Sculpture Art', 'Traditional stone sculpture depicting Hindu deities carved by skilled artisans', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800', 'traditional-art', ARRAY['stone', 'sculpture', 'hindu', 'deities']),
('Elder Care Facility', 'Modern elder care facility providing comfortable living for senior citizens', 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800', 'projects', ARRAY['elder', 'care', 'facility', 'seniors']);

-- Insert sample projects
INSERT INTO projects (title, description, category, status, start_date, end_date, budget, spent_amount, progress, location, beneficiaries, image_url) VALUES
('New Orphanage Construction', 'Building a modern orphanage facility with capacity for 100 children including dormitories, classrooms, and recreational areas', 'infrastructure', 'ongoing', '2023-06-01', '2024-06-01', 2000000.00, 1300000.00, 65, 'Kathmandu', 100, 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'),
('Digital Library Development', 'Creating a comprehensive digital library of Sanskrit and cultural texts accessible online', 'technology', 'ongoing', '2023-09-01', '2024-03-01', 800000.00, 320000.00, 40, 'Online Platform', 5000, 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'),
('Elder Care Facility Expansion', 'Expanding our existing elder care facility to accommodate 50 more residents with modern amenities', 'healthcare', 'ongoing', '2023-11-01', '2024-08-01', 1500000.00, 375000.00, 25, 'Bhaktapur', 50, 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800'),
('Sanskrit Text Translation Initiative', 'Completed translation of 50 ancient Sanskrit texts into modern Nepali and English', 'cultural-preservation', 'completed', '2022-01-01', '2023-12-15', 500000.00, 500000.00, 100, 'Research Center', 5000, 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'),
('Emergency Relief Distribution', 'Provided emergency relief to families affected by natural disasters including food, shelter, and medical aid', 'humanitarian-aid', 'completed', '2023-07-01', '2023-10-20', 300000.00, 300000.00, 100, 'Multiple Districts', 1000, 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800'),
('Community Health Camp', 'Organized free health checkups and medical consultations for rural communities', 'healthcare', 'completed', '2023-05-01', '2023-08-30', 150000.00, 150000.00, 100, 'Rural Areas', 800, 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800'),
('Gurukula Education System', 'Establishing a traditional gurukula system for holistic education combining ancient wisdom with modern learning', 'education', 'planning', '2024-07-01', '2025-07-01', 3000000.00, 0.00, 0, 'Lalitpur', 200, 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800'),
('Cultural Heritage Museum', 'Creating a museum to preserve and showcase Sanatan Dharma artifacts and cultural items', 'cultural-preservation', 'planning', '2024-10-01', '2025-10-01', 2500000.00, 0.00, 0, 'Kathmandu', 10000, 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800'),
('Rural Development Program', 'Comprehensive rural development including education, healthcare, and infrastructure development', 'community-development', 'planning', '2025-01-01', '2026-12-31', 5000000.00, 0.00, 0, 'Remote Villages', 2000, 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800');

-- Insert sample team members
INSERT INTO team_members (name, position, bio, experience, avatar_url, order_index, active) VALUES
('Pandit Rajesh Sharma', 'President & Spiritual Guide', 'Leading the organization with deep knowledge of Sanatan Dharma philosophy and extensive experience in community service', '25+ years in spiritual guidance and community leadership', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', 1, true),
('Dr. Sita Devi', 'Vice President & Research Head', 'PhD in Sanskrit Literature from Tribhuvan University, overseeing research and translation projects', '15+ years in academic research and Sanskrit studies', 'https://images.unsplash.com/photo-1494790108755-2616c9c0b8b3?w=150', 2, true),
('Ram Bahadur Thapa', 'Secretary & Operations Manager', 'Managing daily operations and community outreach programs with dedication and efficiency', '10+ years in organizational management', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150', 3, true),
('Gita Sharma', 'Treasurer & Finance Head', 'Ensuring transparent financial management and maintaining donor relations with integrity', '12+ years in financial management and accounting', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', 4, true),
('Hari Prasad Gautam', 'Program Coordinator', 'Coordinating various welfare programs and volunteer activities across different projects', '8+ years in program management and coordination', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', 5, true),
('Kamala Devi Shrestha', 'Community Relations Manager', 'Building relationships with local communities and stakeholders for better collaboration', '6+ years in community relations and social work', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', 6, true);

-- Update timestamps to current time
UPDATE blogs SET created_at = NOW() - INTERVAL '30 days' + (RANDOM() * INTERVAL '30 days');
UPDATE members SET created_at = NOW() - INTERVAL '365 days' + (RANDOM() * INTERVAL '365 days');
UPDATE donations SET created_at = NOW() - INTERVAL '90 days' + (RANDOM() * INTERVAL '90 days');
UPDATE gallery SET created_at = NOW() - INTERVAL '180 days' + (RANDOM() * INTERVAL '180 days');
UPDATE projects SET created_at = NOW() - INTERVAL '365 days' + (RANDOM() * INTERVAL '365 days');
UPDATE team_members SET created_at = NOW() - INTERVAL '365 days' + (RANDOM() * INTERVAL '365 days');
