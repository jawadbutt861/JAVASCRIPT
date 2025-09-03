const users = [
    {
      id: 1,
      name: "Jawad Butt",
      age: 24,
      isActive: true,
      contact: {
        email: "jawad@example.com",
        phone: "03137876062"
      },
      skills: ["JavaScript", "React", "Node.js", "AI/Chatbot"],
      projects: [
        { title: "Portfolio Website", year: 2024, tech: ["HTML", "CSS", "JS"] },
        { title: "Restaurant App", year: 2025, tech: ["React", "Tailwind"] }
      ],
      address: {
        city: "Quetta",
        country: "Pakistan",
        coordinates: { lat: 30.1798, lng: 66.9750 }
      }
    },
    {
      id: 2,
      name: "Ayesha Khan",
      age: 22,
      isActive: false,
      contact: {
        email: "ayesha@example.com",
        phone: "03001234567"
      },
      skills: ["Python", "Django", "Machine Learning"],
      projects: [
        { title: "Ecommerce Bot", year: 2023, tech: ["Python", "Flask"] },
        { title: "News Website", year: 2025, tech: ["Next.js", "MongoDB"] }
      ],
      address: {
        city: "Karachi",
        country: "Pakistan",
        coordinates: { lat: 24.8607, lng: 67.0011 }
      }
    },
    {
      id: 3,
      name: "Ali Raza",
      age: 26,
      isActive: true,
      contact: {
        email: "ali@example.com",
        phone: "03211223344"
      },
      skills: ["Java", "Spring Boot", "SQL"],
      projects: [
        { title: "Banking System", year: 2022, tech: ["Java", "MySQL"] },
        { title: "Sports Booking App", year: 2025, tech: ["React Native", "Firebase"] }
      ],
      address: {
        city: "Lahore",
        country: "Pakistan",
        coordinates: { lat: 31.5497, lng: 74.3436 }
      }
    }
  ];
  
  console.log(users);