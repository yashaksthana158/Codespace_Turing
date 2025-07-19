const events = [
  {
    id: 0,
    title: "Code Rush",
    type: "overload",
    date: "2025-03-20",
    time: "11:30 AM - 1:00 PM",
    duration: "1 day",
    venue: "Seminar Hall",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "An exciting coding competition as part of Overload++, where participants will compete for a cash prize of ₹1.5K!",
    image: "/img/Assets/overload_events/Code_Rush.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹1.5K",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 1,
    title: "BGMI",
    type: "overload",
    date: "2025-03-20",
    time: "2:30 - 4:00 PM",
    duration: "1 day",
    venue: "Seminar Hall",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Battle it out in the Overload++ BGMI Tournament and prove your gaming skills to claim victory! The winning squad takes home ₹1.5K!",
    image: "/img/Assets/overload_events/bgmi.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹1K",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 2,
    title: "Bug Hunt",
    type: "overload",
    date: "2025-03-20",
    time: "11:30 AM - 1:00 PM",
    duration: "1 day",
    venue: "Room 09",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Sharpen your debugging skills in Bug Hunt, part of Overload++, and hunt down coding errors for exciting rewards! Win up to ₹1.5K!",
    image: "/img/Assets/overload_events/bug_hunt.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹1.5K",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 3,
    title: "Hackazzle",
    type: "overload",
    date: "2025-03-20",
    time: "10:00 - 11:30 AM",
    duration: "1 day",
    venue: "Room 06",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Hackazzle is a thrilling puzzle-solving event at Overload++ that challenges your brainpower and creativity. Cash prize: ₹1K!",
    image: "/img/Assets/overload_events/hackazzle.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹700",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 4,
    title: "Sketch Bytes",
    type: "overload",
    date: "2025-03-20",
    time: "2:30 - 4:00 PM",
    duration: "1 day",
    venue: "Room 09",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Join Sketch Bytes at Overload++ for a fun and exciting drawing-based game! Showcase your creativity and quick thinking to win a cash prize of ₹1K!",
    image: "/img/Assets/overload_events/sketch_bytes.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹1K",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 5,
    title: "Tech Quest",
    type: "overload",
    date: "2025-03-20",
    time: "10:00 - 11:30 AM",
    duration: "1 day",
    venue: "Room 09",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Test your tech knowledge in this Overload++ quiz competition and win exciting prizes! First place wins ₹1K!",
    image: "/img/Assets/overload_events/tech_quest.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹700",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 6,
    title: "Tech War Debate",
    type: "overload",
    date: "2025-03-20",
    time: "10:00 - 11:30 PM",
    duration: "1 day",
    venue: "Seminar Hall",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Tech War is a dynamic debate at Overload++ where students engage in intellectual discourse on tech topics, challenge viewpoints, and showcase critical thinking. Cash prize: ₹1.5K!",
    image: "/img/Assets/overload_events/tech_war.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹700",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 7,
    title: "Tekken",
    type: "overload",
    date: "2025-03-20",
    time: "1:30 - 2:30 PM",
    duration: "1 day",
    venue: "Gaming Zone",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Join the Overload++ Tekken Tournament and fight your way to the top in this electrifying gaming event! Winner gets ₹1.5K!",
    image: "/img/Assets/overload_events/tekken.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹1.5K",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 8,
    title: "Artifact",
    type: "overload",
    date: "2025-03-20",
    time: "2:30 PM",
    duration: "1 day",
    venue: "Seminar Hall",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "Artifact is a thrilling tech-driven treasure hunt at Overload++, where logic and problem-solving skills lead you to the lost artifact. Crack the clues and win ₹1K!",
    image: "/img/Assets/overload_events/artifact.jpg",
    speakers: [],
    status: "upcoming",
    registrationOpen: !0,
    featured: !0,
    cashPrize: "₹1K",
    registrationLink: "https://tr.ee/B20RjB",
  },
  {
    id: 9,
    title: "IOT and Cloud Computing",
    type: "workshop",
    date: "2024-02-29",
    time: "10:00 AM - 12:00 PM, 1:30 PM - 3:30 PM",
    duration: "1 day",
    venue: "Conference Room",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "A one-day workshop covering the fundamentals of IoT and Cloud Computing, conducted under the DBT Star Status College Scheme 2023-24.",
    image: "/img/Assets/1.webp",
    speakers: [
      {
        name: "Dr. Nikhil Rajput",
        role: "Assistant Professor, Ramanujan College, DU",
        image: "https://source.unsplash.com/random/100x100/?man",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
  },
  {
    id: 10,
    title: "Hands on work experience in Blockchain",
    type: "workshop",
    date: "2023-10-31",
    time: "01:00 PM - 03:00 PM",
    duration: "2 hours",
    venue: "Conference Room",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "An insightful seminar on navigating cybersecurity challenges in the digital world, featuring discussions on the latest trends and threats.",
    image: "/img/Assets/2.webp",
    speakers: [
      {
        name: "Dr. Ihitiram Raza Khan",
        role: "Professor,Dept. Computer Sc & Engineering Jamia Hamdard Deemed University , New delhi",
        image: "https://source.unsplash.com/random/100x100/?man",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
  },
  {
    id: 11,
    title: "Navigating the Digital Frontier & Cyber Security Awareness",
    type: "seminar",
    date: "2023-10-31",
    time: "01:00 PM",
    duration: "N/A",
    venue: "Seminar Hall",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "A seminar on digital transformation and cybersecurity awareness under the aegis of the DBT Star College scheme 2023-24.",
    image: "/img/Assets/3.webp",
    speakers: [
      {
        name: "Dr. Mohit Soni",
        role: "Founder and CEO, WhiteLint",
        image: "https://source.unsplash.com/random/100x100/?man",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !1,
  },
  {
    id: 12,
    title: "Use of Machine Learning in Video Streaming",
    type: "technical talk",
    date: "2024-03-17",
    time: "11:00 AM - 01:00 PM",
    duration: "2 hours",
    venue: "Google Meet (Online)",
    address: "Virtual Event",
    description:
      "A tech talk on how Machine Learning is revolutionizing video streaming, organized by the Turing Society under the aegis of the DBT Star College scheme 2023-24.",
    image: "/img/Assets/5.webp",
    speakers: [
      {
        name: "Mr. Sudesh Chandel",
        role: "Principal Data Engineer, AT&T India Pvt. Ltd, Hyderabad, India",
        image: "https://source.unsplash.com/random/100x100/?engineer",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
  },
  {
    id: 13,
    title: "Quantum Computing and Cybersecurity: A New Era of Challenges",
    type: "technical talk",
    date: "2024-03-16",
    time: "1:00 PM - 3:00 PM",
    duration: "2 hours",
    venue: "Google Meet (Online)",
    address: "Virtual Event",
    description:
      "A technical talk on Quantum Computing and Cybersecurity, discussing the emerging challenges in the field. Organized by the Turing Society under the aegis of the DBT Star College scheme 2023-24.",
    image: "/img/Assets/6.webp",
    speakers: [
      {
        name: "Dr. Nihar Rajan Roy",
        role: "Associate Professor, Dept. of Computer Science & Engineering, Sharda University, Greater Noida",
        image: "https://source.unsplash.com/random/100x100/?professor",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
  },
  {
    id: 14,
    title: "Data Dive: Surfing the Waves of AI Innovation",
    type: "technical talk",
    date: "2024-02-25",
    time: "11:00 AM - 01:00 PM",
    duration: "2 hours",
    venue: "Online",
    address: "Google Meet",
    description:
      "A technical talk on AI innovations and data science trends, featuring insights from industry experts.",
    image: "/img/Assets/7.webp",
    speakers: [
      {
        name: "Ms. Aakanksha Rehan",
        role: "Senior Data Scientist, Capgemini IT Pvt. Ltd.",
        image: "https://source.unsplash.com/random/100x100/?woman",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
  },
  {
    id: 15,
    title: "Developing an Excellent Research Paper & Publication Ethics",
    type: "technical talk",
    date: "2024-03-22",
    time: "01:30 PM - 03:30 PM",
    duration: "2 hours",
    venue: "Google Meet (Online)",
    address: "Virtual Event",
    description:
      "A webinar on writing high-quality research papers while adhering to original research and publication ethics, organized by the Turing Society under the aegis of the DBT Star College scheme 2023-24.",
    image: "/img/Assets/4.webp",
    speakers: [
      {
        name: "Dr. Narendra Nath Dalei",
        role: "Associate Professor, Department of Economics, Central University of Himachal Pradesh",
        image: "https://source.unsplash.com/random/100x100/?professor",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
  },
  {
    id: 16,
    title: "Natural Language Processing Workshop",
    type: "workshop",
    date: "2024-11-12 to 2024-11-13",
    time: "10:00 AM onwards",
    duration: "2 days",
    venue: "Conference Room",
    address: "College Campus, Building 3",
    description:
      "An inter-college NLP workshop covering Sentiment Analysis, Text Representation, Document Clustering, and Language Modeling with hands-on sessions.",
    image: "/img/Assets/8.webp",
    speakers: [
      {
        name: "Experts from University",
        role: "NLP Specialists",
        image: "https://source.unsplash.com/random/100x100/?man",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
  },
  {
    id: 18,
    title: "Real Time 3D",
    type: "seminar",
    date: "2025-02-21",
    time: "1:00 PM - 2:30 PM",
    duration: "1.5 hours",
    venue: "Conference Room",
    address: "Acharya Narendra Dev College, University of Delhi",
    description:
      "A seminar on real-time 3D technology organized by the Department of Computer Science, Turing Society.",
    image: "/img/Assets/real_time_3d.webp",
    speakers: [
      {
        name: "Anupama Jain",
        role: "Regional Sales Head, Aptech Ltd. (Arena Animation)",
        image: "https://source.unsplash.com/random/100x100/?woman",
      },
    ],
    status: "past",
    registrationOpen: !1,
    featured: !0,
    qrCodeLink: "ADD_REGISTRATION_LINK_HERE",
  },
];
function renderEvents(e) {
  const t = document.getElementById("events-container");
  if (((t.innerHTML = ""), 0 === e.length))
    return void (t.innerHTML =
      '<div class="no-events">No events found matching your criteria.</div>');
  e.forEach((e) => {
    const n = new Date(e.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      a = document.createElement("div");
    (a.className = "event-card"),
      (a.innerHTML = `\n                <div class="event-image">\n                    <img src="${
        e.image
      }" alt="${
        e.title
      }" loading="lazy" class="clickable-image" data-src="${decodeURIComponent(
        e.image
      )}">\n                </div>\n                <div class="event-type">${
        e.type.charAt(0).toUpperCase() + e.type.slice(1)
      }</div>\n                <div class="event-content">\n                    <div class="event-date">\n                        <i class="fas fa-calendar-alt"></i>\n                        ${n}\n                    </div>\n                    <h3 class="event-title">${
        e.title
      }</h3>\n                    <div class="event-details">\n                        <div class="event-detail">\n                            <i class="fas fa-clock"></i>\n                            <span>${
        e.time
      }</span>\n                        </div>\n                        <div class="event-detail">\n                            <i class="fas fa-map-marker-alt"></i>\n                            <span>${
        e.venue
      }</span>\n                        </div>\n                    </div>\n                    <div class="event-actions">\n                        <button class="view-details" data-event-id="${
        e.id
      }">View Details</button>\n                        ${
        e.registrationOpen
          ? `<button class="register-btn" data-event-id="${e.id}">Register</button>`
          : '<button class="register-btn" disabled>Closed</button>'
      }\n                    </div>\n                </div>\n            `),
      t.appendChild(a);
  });
  const n = document.getElementById("lightbox"),
    a = document.getElementById("lightbox-img"),
    i = document.querySelector(".close");
  document.querySelectorAll(".clickable-image").forEach((e) => {
    e.addEventListener("click", function () {
      (n.style.display = "flex"), (a.src = this.dataset.src);
    });
  }),
    i.addEventListener("click", () => {
      n.style.display = "none";
    }),
    n.addEventListener("click", (e) => {
      e.target === n && (n.style.display = "none");
    }),
    document.querySelectorAll(".view-details").forEach((e) => {
      e.addEventListener("click", function () {
        const e = Number.parseInt(this.getAttribute("data-event-id")),
          t = {
            0: "Coderush.html",
            1: "BGMI.html",
            2: "BugHunt.html",
            3: "Hackzzle.html",
            4: "Sketchbytes.html",
            5: "Techquest.html",
            6: "TechWar.html",
            7: "Tekken.html",
            8: "The lost Artifact.html",
          };
        t.hasOwnProperty(e) ? window.open(t[e], "_blank") : openEventModal(e);
      });
    }),
    document.querySelectorAll(".register-btn:not([disabled])").forEach((e) => {
      e.addEventListener("click", function () {
        window.open("https://tr.ee/B20RjB", "_blank");
      });
    });
}
function openEventModal(e) {
  const t = events.find((t) => t.id === e);
  if (!t) return;
  const n = new Date(t.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    a = document.getElementById("modal-content");
  let i = "";
  t.speakers &&
    t.speakers.length > 0 &&
    (i = `\n                <div class="event-speakers">\n                    <h3>Speakers</h3>\n                    <div class="speakers-list">\n                        ${t.speakers
      .map(
        (e) =>
          `\n                            <div class="speaker-item">\n                                <img src="${e.image}" alt="${e.name}">\n                                <div>\n                                    <div>${e.name}</div>\n                                    <div class="speaker-role">${e.role}</div>\n                                </div>\n                            </div>\n                        `
      )
      .join(
        ""
      )}\n                    </div>\n                </div>\n            `),
    (a.innerHTML = `\n            <div class="event-header">\n                <h2>${
      t.title
    }</h2>\n                <div class="event-meta">\n                    <div class="event-meta-item">\n                        <i class="fas fa-calendar-alt"></i>\n                        <span>${n}</span>\n                    </div>\n                    <div class="event-meta-item">\n                        <i class="fas fa-clock"></i>\n                        <span>${
      t.time
    }</span>\n                    </div>\n                    <div class="event-meta-item">\n                        <i class="fas fa-hourglass-half"></i>\n                        <span>${
      t.duration
    }</span>\n                    </div>\n                    <div class="event-meta-item">\n                        <i class="fas fa-map-marker-alt"></i>\n                        <span>${
      t.venue
    }</span>\n                    </div>\n                </div>\n            </div>\n            <div class="event-description">\n                <h3>About This Event</h3>\n                <p>${
      t.description
    }</p>\n            </div>\n            ${i}\n            <div class="event-location">\n                <h3>Location</h3>\n                <div class="location-map">\n                    \x3c!--- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579802148037!5m2!1sen!2sbg" allowfullscreen=""></iframe>--\x3e\n                    \x3c!--- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579802148037!5m2!1sen!2sbg" allowfullscreen=""></iframe>---\x3e\n                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0245170251796!2d77.26125867473363!3d28.53898278832409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dfd351e211%3A0xf522d7e9ce85de17!2sAcharya%20Narendra%20Dev%20College%20University%20Of%20Delhi.!5e0!3m2!1sen!2sin!4v1741896204228!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n                </div>\n                <p>${
      t.address
    }</p>\n            </div>\n            <div class="event-actions-modal">\n                ${
      t.registrationOpen
        ? `<button class="btn btn-primary register-btn" data-event-id="${t.id}">Register Now</button>`
        : '<button class="btn btn-primary" disabled>Registration Closed</button>'
    }\n                <button class="btn btn-secondary close-modal-btn">Close</button>\n            </div>\n        `);
  document.getElementById("event-modal").style.display = "block";
  const s = a.querySelector(".register-btn");
  s &&
    s.addEventListener("click", function () {
      window.open("https://tr.ee/B20RjB", "_blank");
    });
  const r = a.querySelector(".close-modal-btn");
  r &&
    r.addEventListener("click", () => {
      closeModal("event-modal");
    });
}
function closeModal(e) {
  document.getElementById(e).style.display = "none";
}
function filterEvents() {
  const e = document.getElementById("search-events").value.toLowerCase(),
    t = document.querySelector(".filter-btn.active"),
    n = document.querySelector(".time-btn.active"),
    a = t ? t.getAttribute("data-filter") : "all",
    i = n ? n.getAttribute("data-time") : "upcoming";
  renderEvents(
    events.filter((t) => {
      const n =
          t.title.toLowerCase().includes(e) ||
          t.description.toLowerCase().includes(e),
        s = "all" === a || t.type === a,
        r = t.status === i;
      return n && s && r;
    })
  );
}
document.addEventListener("DOMContentLoaded", () => {
  renderEvents(events.filter((e) => "upcoming" === e.status)),
    document
      .getElementById("search-events")
      .addEventListener("input", filterEvents),
    document.querySelectorAll(".filter-btn").forEach((e) => {
      e.addEventListener("click", function () {
        document
          .querySelectorAll(".filter-btn")
          .forEach((e) => e.classList.remove("active")),
          this.classList.add("active"),
          filterEvents();
      });
    }),
    document.querySelectorAll(".time-btn").forEach((e) => {
      e.addEventListener("click", function () {
        document
          .querySelectorAll(".time-btn")
          .forEach((e) => e.classList.remove("active")),
          this.classList.add("active"),
          filterEvents();
      });
    });
});
