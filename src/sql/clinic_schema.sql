
CREATE DATABASE IF NOT EXISTS clinic_system;
USE clinic_system;

CREATE TABLE patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE doctors (
    doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    specialty VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE services (
    service_id INT AUTO_INCREMENT PRIMARY KEY,
    service_name VARCHAR(100),
    description TEXT,
    price DECIMAL(10,2)
);


CREATE TABLE appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    service_id INT,
    appointment_date DATE,
    appointment_time TIME,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);


INSERT INTO doctors (full_name, specialty, phone, email)
VALUES
('Dr. Sara Haddad', 'General Practitioner', '71000000', 'sara@example.com'),
('Dr. Fadi Issa', 'Dentist', '76000000', 'fadi@example.com');

INSERT INTO services (service_name, description, price)
VALUES
('General Checkup', 'Complete body checkup and consultation.', 40.00),
('Dental Care', 'Teeth cleaning, extraction and whitening.', 80.00);