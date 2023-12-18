CREATE TABLE Unit (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    numOfBedroom INTEGER DEFAULT 0,
    numOfBathroom INTEGER DEFAULT 0,
    unitArea INTEGER CHECK (unitArea >= 0),
    isFurnished BOOLEAN DEFAULT false,
    inRoomLaundry BOOLEAN DEFAULT false,
    baseFeePerMonth DECIMAL CHECK (baseFeePerMonth >= 0),
    utilityFeePerMonth DECIMAL CHECK (utilityFeePerMonth >= 0),
    internetFeePerMonth DECIMAL CHECK (internetFeePerMonth >= 0),
    startDate DATE,
    endDate DATE,
    photos TEXT[]  -- Array of photo URLs
);

INSERT INTO Unit (title, numOfBedroom, numOfBathroom, unitArea, isFurnished, inRoomLaundry, baseFeePerMonth, utilityFeePerMonth, internetFeePerMonth, startDate, endDate, photos)
VALUES
('101 Main St', 2, 1, 850, true, false, 1200.00, 150.00, 45.00, '2023-01-01', '2023-12-31', ARRAY['http://example.com/photo1.jpg', 'http://example.com/photo2.jpg']),
('202 Elm St', 3, 2, 1100, false, true, 1500.00, 200.00, 55.00, '2023-02-01', '2023-11-30', ARRAY['http://example.com/photo3.jpg', 'http://example.com/photo4.jpg']),
('303 Oak St', 1, 1, 700, true, true, 1000.00, 100.00, 40.00, '2023-03-01', '2024-02-28', ARRAY['http://example.com/photo5.jpg', 'http://example.com/photo6.jpg']),
('404 Pine St', 4, 2, 1300, false, false, 1800.00, 250.00, 60.00, '2023-01-15', '2023-12-15', ARRAY['http://example.com/photo7.jpg', 'http://example.com/photo8.jpg']),
('505 Cedar St', 2, 2, 900, true, true, 1300.00, 180.00, 50.00, '2023-04-01', '2024-03-31', ARRAY['http://example.com/photo9.jpg', 'http://example.com/photo10.jpg']),
('606 Birch St', 3, 1, 950, false, true, 1400.00, 175.00, 45.00, '2023-05-01', '2024-04-30', ARRAY['http://example.com/photo11.jpg', 'http://example.com/photo12.jpg']),
('707 Willow St', 1, 1, 750, true, false, 1100.00, 120.00, 35.00, '2023-06-01', '2024-05-31', ARRAY['http://example.com/photo13.jpg', 'http://example.com/photo14.jpg']),
('808 Maple St', 2, 2, 1000, false, false, 1250.00, 160.00, 42.00, '2023-07-01', '2024-06-30', ARRAY['http://example.com/photo15.jpg', 'http://example.com/photo16.jpg']),
('909 Ash St', 4, 3, 1400, true, true, 1900.00, 280.00, 65.00, '2023-08-01', '2024-07-31', ARRAY['http://example.com/photo17.jpg', 'http://example.com/photo18.jpg']),
('1000 Beech St', 3, 2, 1200, false, true, 1600.00, 210.00, 55.00, '2023-09-01', '2024-08-31', ARRAY['http://example.com/photo19.jpg', 'http://example.com/photo20.jpg']);
