// የትምህርቶች ዝርዝር (እዚህ ጋር አዳዲስ ትምህርቶችን መጨመር ትችላለህ)
const courseData = [
    {
        moduleTitle: "Module 1: መሠረታዊ የቪዲዮ ዝግጅት",
        lessons: [
            { id: "vid01", title: "1.1 የCapCut ገጽታና ዝግጅት", desc: "አፑን መጫን እና ለቲክቶክ የሚሆን 9:16 Ratio ማስተካከል።" },
            { id: "vid02", title: "1.2 ቪዲዮዎችን ማስገባትና መቁረጥ", desc: "በርካታ ክሊፖችን ማያያዝ እና አላስፈላጊ ቦታዎችን በ'Split' ማጥፋት።" },
            { id: "vid03", title: "1.3 ትራንዚሽኖች (Transitions)", desc: "በቪዲዮዎች መገናኛ ላይ ማራኪ እንቅስቃሴዎችን መጨመር።" }
        ]
    },
    {
        moduleTitle: "Module 2: ድምፅና ጽሑፍ ለቢዝነስ",
        lessons: [
            { id: "vid04", title: "2.1 የሽያጭ ሙዚቃና Voiceover", desc: "የጀርባ ሙዚቃ መጨመር እና የራስን ድምፅ በጥራት መቅዳት።" },
            { id: "vid05", title: "2.2 Auto-Captions አጠቃቀም", desc: "ቪዲዮው ላይ የሚነገረውን ቃል አፑ በራሱ እንዲጽፈው ማድረግ።" },
            { id: "vid06", title: "2.3 የዋጋና ስልክ ቁጥር አጻጻፍ", desc: "ጎልተው የሚታዩ እና ተንቀሳቃሽ የሆኑ ጽሑፎችን መሥራት።" }
        ]
    },
    {
        moduleTitle: "Module 3: የላቁ የኤዲቲንግ ዘዴዎች",
        lessons: [
            { id: "vid07", title: "3.1 Overlay እና Logo አጠቃቀም", desc: "የድርጅትዎን አርማ (Logo) በቪዲዮው ጥግ ላይ ቋሚ ማድረግ።" },
            { id: "vid08", title: "3.2 Keyframes (አኒሜሽን)", desc: "ምስሎችን እና ጽሑፎችን በቪዲዮው ላይ እንደፈለጉ ማንቀሳቀስ።" },
            { id: "vid09", title: "3.3 Background Removal", desc: "የቪዲዮውን ጀርባ በማጥፋት በሌላ ምስል መተካት።" }
        ]
    },
    {
        moduleTitle: "Module 4: የቢዝነስ ማስታወቂያ Case Studies",
        lessons: [
            { id: "vid10", title: "4.1 የሆቴል ማስታወቂያ አሰራር", desc: "ለሆቴል ቢዝነስ የሚሆን ሙሉ የቪዲዮ ኤዲቲንግ ሂደት።" },
            { id: "vid11", title: "4.2 የልብስ/ምርት ማስታወቂያ", desc: "ምርቶችን ሳቢ አድርጎ የማቅረብ ጥበብ (Speed Ramping)።" }
        ]
    },
    {
        moduleTitle: "Module 5: ሽያጭና ማጠቃለያ",
        lessons: [
            { id: "vid12", title: "5.1 ቪዲዮን ሴቭ ማድረግ (Quality)", desc: "ከፍተኛ ጥራት ያለው ቪዲዮ (1080p) ኤክስፖርት ማድረግ።" },
            { id: "vid13", title: "5.2 የቲክቶክ ስልቶች (Viral Strategy)", desc: "ቪዲዮው ብዙ ሰው እንዲያየው እንዴት መለጠፍ እንዳለብን።" }
        ]
    }
];

const playlistContainer = document.getElementById('playlist');

courseData.forEach(module => {
    // የሞጁሉን ርዕስ መፍጠር
    const moduleHeader = document.createElement('h4');
    moduleHeader.innerText = module.moduleTitle;
    moduleHeader.style.padding = "10px 5px";
    moduleHeader.style.color = "#555";
    playlistContainer.appendChild(moduleHeader);

    // የሞጁሉን ትምህርቶች መፍጠር
    module.lessons.forEach(lesson => {
        const div = document.createElement('div');
        div.className = 'video-link';
        div.innerText = lesson.title;
        div.onclick = (e) => playVideo(lesson.id, lesson.title, lesson.desc, e);
        playlistContainer.appendChild(div);
    });
});

function playVideo(id, title, desc, event) {
    // ቪዲዮውን ቀይር
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?rel=0&autoplay=1" allowfullscreen allow="autoplay"></iframe>`;

    // መረጃውን ቀይር
    document.getElementById('current-title').innerText = title;
    document.getElementById('current-desc').innerText = desc;

    // Active ከለር ቀይር
    const links = document.querySelectorAll('.video-link');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

function contactAdmin() {
    // ያንተን የቴሌግራም ሊንክ እዚህ ተካው
    window.location.href = "https://t.me/yourusername";
}