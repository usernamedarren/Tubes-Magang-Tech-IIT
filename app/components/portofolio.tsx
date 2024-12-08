'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import {body, header} from "@/app/styles/fonts"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const portfolioData = [
    {
        id: 1,
        title: "Website Showcase INDDES ITB",
        category: "Website",
        year: 2021,
        description: "Website showcase karya mahasiswa Desain Produk...",
        technologies: ["Netlify", "Gridsome"],
        image: "/ipad.png",
    },
    {
        id: 2,
        title: "Website Acara Minefest",
        category: "Website",
        year: 2021,
        description: "Website untuk acara Minefest 2021...",
        technologies: ["Laravel"],
        image: "/image4.png",
    },
    {
        id: 3,
        title: "Website Cryptoiz",
        category: "Website",
        year: 2021,
        description: "Website untuk informasi cryptocurrency...",
        technologies: ["PHP"],
        image: "/image5.png",
    },
    {
        id: 4,
        title: "Aplikasi Android Arcade Game",
        category: "Mobile",
        year: 2020,
        description: "Game arcade untuk platform Android.",
        technologies: ["Kotlin"],
        image: "/iphone.png",
    },
];

export default function Portofolio() {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredData, setFilteredData] = useState(portfolioData);

    useEffect(() => {
        const filtered = portfolioData.filter(
            (item) =>
                item.title.toLowerCase().includes(searchText.toLowerCase()) &&
                (selectedCategory === "" || item.category === selectedCategory)
        );
        setFilteredData(filtered);
    }, [searchText, selectedCategory]);

    return (
        <main className="bg-[#FDE67E] p-5">
            <h1 className={`${header.className} text-center font-extrabold text-4xl mt-5`}>Portofolio</h1>
            <h3 className={`${header.className} text-center font-bold text-xl`}>Inkubator IT</h3>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-5">
                <input
                    type="text"
                    placeholder="Cari proyek..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border rounded-md px-4 py-2 w-full md:w-1/2"
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border rounded-md px-4 py-2 w-full md:w-1/3"
                >
                    <option value="">Semua Kategori</option>
                    <option value="Website">Website</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Desktop">Desktop</option>
                </select>
            </div>

            {/* Portfolio List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {filteredData.length > 0 ? (
                    filteredData.map((project) => (
                        <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <Image
                                src={project.image}
                                width={400}
                                height={250}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-xl">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <p className="mt-2 text-sm">
                                    <strong>Kategori:</strong> {project.category} <br />
                                    <strong>Tahun:</strong> {project.year} <br />
                                    <strong>Teknologi:</strong> {project.technologies.join(", ")}
                                </p>
                                <Sheet>
                                    <SheetTrigger className="mt-4 inline-block bg-blue-500 hover:bg-amber-500 text-white px-4 py-2 rounded-md">
                                        Pelajari Lebih Lanjut
                                    </SheetTrigger>
                                    <SheetContent className="bg-cover bg-center bg-[url('/background_sheet.jpg')] text-white">
                                        <SheetHeader>
                                            <SheetTitle className="text-white">{project.title}</SheetTitle>
                                            <SheetDescription className="text-white">{project.description}</SheetDescription>
                                        </SheetHeader>
                                        <p className="mt-4">
                                            <strong>Kategori:</strong> {project.category} <br />
                                            <strong>Tahun:</strong> {project.year} <br />
                                            <strong>Teknologi:</strong> {project.technologies.join(", ")}
                                        </p>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Tidak ada proyek yang ditemukan.</p>
                )}
            </div>
        </main>
    );
}
