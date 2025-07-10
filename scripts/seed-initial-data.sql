-- Insert sample campaigns
INSERT INTO public.campaigns (title, description, content, goal_amount, raised_amount, location, deadline, category, status, featured) VALUES
('Temple Restoration Project', 'Help us restore the ancient Pashupatinath Temple complex and preserve our spiritual heritage.', 'Detailed content about temple restoration...', 100000.00, 65000.00, 'Kathmandu, Nepal', '2024-12-31', 'Heritage', 'active', true),
('Rural Education Initiative', 'Providing quality education and dharmic values to children in remote villages of Nepal.', 'Detailed content about education initiative...', 50000.00, 32000.00, 'Gorkha District', '2024-10-15', 'Education', 'active', false),
('Healthcare for All', 'Mobile healthcare units bringing medical care to underserved communities.', 'Detailed content about healthcare program...', 75000.00, 28000.00, 'Multiple Districts', '2024-11-30', 'Healthcare', 'active', true);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, tags, status, published_at) VALUES
('The Importance of Dharmic Education in Modern Times', 'dharmic-education-modern-times', 'Exploring how traditional dharmic teachings remain relevant and essential in today''s rapidly changing world.', 'Full blog content here...', 'Education', ARRAY['education', 'dharma', 'tradition'], 'published', NOW()),
('Community Service: A Path to Spiritual Growth', 'community-service-spiritual-growth', 'How serving others through charitable work becomes a means of personal and spiritual development.', 'Full blog content here...', 'Spirituality', ARRAY['service', 'spirituality', 'growth'], 'published', NOW()),
('Preserving Cultural Heritage Through Temple Restoration', 'preserving-cultural-heritage-temples', 'Our ongoing efforts to restore and maintain Nepal''s ancient temples and their cultural significance.', 'Full blog content here...', 'Heritage', ARRAY['heritage', 'temples', 'culture'], 'published', NOW());
