const potions = [
  {
    id: "blood",
    nameTH: "น้ำยาทดแทนเลือด",
    nameEN: "Blood-Replenishing Potion",
    level: "กลาง",
    look: "สีแดงเข้ม หนืดเล็กน้อย",
    effect: [
      "ฟื้นฟูปริมาณเลือดที่สูญเสียอย่างรวดเร็ว",
      "ใช้ในผู้บาดเจ็บจากอุบัติเหตุหรือการต่อสู้"
    ],
    limit: [
      "ไม่สมานแผล",
      "ใช้เกินขนาดอาจทำให้เวียนศีรษะ"
    ],
    ingredients: [
      "เลือดมังกรแห้ง (Dragon Blood – เกรดการแพทย์)",
      "สารสกัดทับทิมเวทมนตร์",
      "ใบเน็ตเทิลตากแห้ง",
      "น้ำแร่บริสุทธิ์"
    ],
    steps: [
      "ตั้งหม้อต้มใส่น้ำแร่บริสุทธิ์ ใช้ไฟกลางจนเกิดไอสีแดงจาง",
      "ใส่ใบเน็ตเทิลบด คนตามเข็มนาฬิกา 7 ครั้ง",
      "เติมสารสกัดทับทิมเวทมนตร์ เคี่ยวจนสีเข้มขึ้น",
      "โรยเลือดมังกรแห้งทีละหยิบ พร้อมร่ายคาถา Stabilio",
      "ปิดไฟ พักให้เย็นก่อนบรรจุ"
    ],
    badges: ["ฟื้นฟูเลือด", "ห้องพยาบาล", "การแพทย์"]
  },

  {
    id: "skelegro",
    nameTH: "น้ำยาปลูกกระดูก",
    nameEN: "Skele-Gro",
    level: "สูง",
    look: "ใส กลิ่นแรง",
    effect: [
      "ทำให้กระดูกงอกใหม่ทั้งชิ้น",
      "ใช้เมื่อกระดูกแตกหายหรือถูกเวททำลาย"
    ],
    limit: [
      "เจ็บปวดรุนแรง",
      "ต้องพักฟื้นหลายชั่วโมง"
    ],
    ingredients: [
      "กระดูกสัตว์เวทบดละเอียด",
      "เขาสัตว์เวทต้ม",
      "ผงไขกระดูกมังกร",
      "รากคอมฟรีย์เวท"
    ],
    steps: [
      "ต้มเขาสัตว์เวทในน้ำจนของเหลวขุ่นขาว",
      "ใส่กระดูกสัตว์เวทบด คนทวนเข็ม 10 ครั้ง",
      "เติมรากคอมฟรีย์เวท เคี่ยวต่อด้วยไฟอ่อน",
      "โรยผงไขกระดูกมังกรอย่างช้า ๆ",
      "เพิ่มไฟจนเดือดจัด 1 นาที แล้วลดไฟทันที",
      "กรองของแข็ง ร่าย Ossio Forma ก่อนบรรจุ"
    ],
    badges: ["งอกกระดูก", "ขั้นสูง", "ฟื้นฟูหนัก"]
  },

  {
    id: "wiggenweld",
    nameTH: "น้ำยาวิกเกนเวล",
    nameEN: "Wiggenweld Potion",
    level: "พื้นฐาน–กลาง",
    look: "สีทองอ่อน / กลิ่นหวานสมุนไพร",
    effect: [
      "ฟื้นฟูพลังชีวิต",
      "ช่วยให้ผู้หมดสติฟื้นตัว"
    ],
    limit: [
      "ไม่สามารถรักษาคำสาปขั้นสูงได้",
      "ไม่แทนการรักษาโดยฮีลเลอร์ในกรณีรุนแรง"
    ],
    ingredients: [
      "ใบดิททานี",
      "น้ำผึ้งเวทมนตร์",
      "เลือดซาลาแมนเดอร์",
      "น้ำบริสุทธิ์"
    ],
    steps: [
      "อุ่นน้ำบริสุทธิ์จนเกิดฟองละเอียด",
      "เติมน้ำผึ้งเวทมนตร์ คนเบา ๆ",
      "ใส่ใบดิตทานีบด",
      "หยดเลือดซาลาแมนเดอร์ แล้วปิดไฟทันที"
    ],
    badges: ["ฮีล", "ฟื้นตัว", "ยอดนิยม"]
  },

  {
    id: "antidote",
    nameTH: "น้ำยาแก้พิษเบื้องต้น",
    nameEN: "Basic Antidote",
    level: "พื้นฐาน",
    look: "สีเขียวอ่อน",
    effect: [
      "แก้พิษทั่วไป",
      "ใช้ Bezoar หรือสมุนไพรพื้นฐาน"
    ],
    limit: [
      "ไม่สามารถล้างพิษเวทขั้นสูง",
      "หากเป็นพิษคำสาปต้องพบฮีลเลอร์"
    ],
    ingredients: [
      "Bezoar บด (ปริมาณน้อย)",
      "รากแอสโฟเดล",
      "ใบมินต์เวท",
      "น้ำต้มสมุนไพร"
    ],
    steps: [
      "ต้มสมุนไพรพื้นฐานจนได้น้ำสีเขียวอ่อน",
      "ใส่ Bezoar บดละเอียด",
      "ปิดไฟ กรอง และร่าย Purificare"
    ],
    badges: ["แก้พิษ", "พื้นฐาน", "ฉุกเฉิน"]
  },

  {
    id: "pepperup",
    nameTH: "น้ำยาพริกไทยซู่ซ่า",
    nameEN: "Pepperup Potion",
    level: "พื้นฐาน",
    look: "กลิ่นเผ็ดร้อน",
    effect: [
      "รักษาไข้ หวัด อาการหนาวสั่น"
    ],
    limit: [
      "มีไอร้อนหรือควันออกจากหู"
    ],
    ingredients: [
      "พริกไฟเวทมนตร์",
      "ใบพริกไทยดำ",
      "สารสกัดซาลาแมนเดอร์",
      "น้ำเดือด"
    ],
    steps: [
      "ต้มน้ำจนเดือดจัด",
      "ใส่พริกไฟเวท คนเร็ว 6 ครั้ง",
      "เติมสารสกัดซาลาแมนเดอร์",
      "ปิดฝาหม้อ พักให้ฤทธิ์เสถียร"
    ],
    badges: ["หวัด", "ไข้", "แก้หนาว"]
  },

  {
    id: "calming",
    nameTH: "น้ำยา Calming Draught",
    nameEN: "Calming Draught",
    level: "กลาง",
    look: "สีม่วงอ่อน / กลิ่นนุ่ม",
    effect: [
      "ลดความเครียด ความตื่นตระหนก",
      "ปรับสมดุลอารมณ์"
    ],
    limit: [
      "ใช้มากเกินไปทำให้เฉยชา"
    ],
    ingredients: [
      "ดอกลาเวนเดอร์เวท",
      "ใบเวิร์มวูด",
      "น้ำผึ้งแสงจันทร์",
      "น้ำกลั่น"
    ],
    steps: [
      "อุ่นน้ำกลั่นด้วยไฟอ่อน",
      "ใส่ดอกลาเวนเดอร์เวท",
      "เติมใบเวิร์มวูดบด คนช้า ๆ",
      "ใส่น้ำผึ้งแสงจันทร์",
      "เคี่ยวต่อเล็กน้อย แล้วร่าย Serenitas"
    ],
    badges: ["อารมณ์", "สงบ", "ลดตื่นตระหนก"]
  },

  {
    id: "wormwood",
    nameTH: "น้ำยาเวิร์มวูด",
    nameEN: "Wormwood-based Potion",
    level: "กลาง",
    look: "สีเขียวเข้ม กลิ่นขม",
    effect: [
      "ใช้เป็นฐานในยาฟื้นฟูบางชนิด",
      "ลดพิษบางประเภทและอาการคลื่นไส้"
    ],
    limit: [
      "รสขมจัด",
      "ไม่ใช่ยารักษาหลักสำหรับพิษรุนแรง"
    ],
    ingredients: [
      "ใบเวิร์มวูดสด",
      "รากแอสโฟเดล",
      "น้ำแร่ยามราตรี"
    ],
    steps: [
      "บดใบเวิร์มวูดสดให้ละเอียด",
      "ต้มกับน้ำแร่ยามราตรีด้วยไฟอ่อน",
      "เติมรากแอสโฟเดล",
      "เคี่ยวจนสีเข้ม แล้วกรอง"
    ],
    badges: ["สมุนไพร", "ฐานยา", "ขม"]
  },

  {
    id: "dittany",
    nameTH: "น้ำยาดิตทานี",
    nameEN: "Essence of Dittany",
    level: "กลาง",
    look: "ใสอมทอง",
    effect: [
      "สมานแผลสดทันที",
      "ลดการติดเชื้อ"
    ],
    limit: [
      "ไม่รักษาแผลจากคำสาปรุนแรง"
    ],
    ingredients: [
      "ใบดิตทานีสด",
      "น้ำแร่บริสุทธิ์",
      "น้ำมันสมุนไพร"
    ],
    steps: [
      "บดใบดิตทานีสดจนละเอียด",
      "แช่ในน้ำแร่บริสุทธิ์",
      "เติมน้ำมันสมุนไพรเล็กน้อย",
      "กรองและเก็บในขวดปิดแสง"
    ],
    badges: ["สมานแผล", "ยอดนิยม", "พกพา"]
  },

  {
    id: "mandrake",
    nameTH: "น้ำยาแมนเดรก",
    nameEN: "Mandrake Restorative Draught",
    level: "สูง",
    look: "สีทองหม่น กลิ่นฉุน",
    effect: [
      "ฟื้นฟูผู้ถูกสาปเป็นหินหรือหมดสติถาวร"
    ],
    limit: [
      "ต้องใช้แมนเดรกโตเต็มวัย",
      "ต้องระวังเสียงกรีดร้องของแมนเดรก"
    ],
    ingredients: [
      "รากแมนเดรกโตเต็มวัย",
      "ใบเซจเวทมนตร์",
      "น้ำผึ้งเข้มข้น"
    ],
    steps: [
      "สวมที่อุดหู หั่นรากแมนเดรกโตเต็มวัย",
      "ต้มในน้ำจนสีทองหม่น",
      "ใส่ใบเซจเวทมนตร์",
      "เติมน้ำผึ้งเข้มข้น เคี่ยวต่อ",
      "กรอง ร่าย Vita Reductio ก่อนบรรจุ"
    ],
    badges: ["ฟื้นคืน", "ชั้นสูง", "หายาก"]
  },

  {
    id: "flobber",
    nameTH: "เมือกหนอนฟลอบเบอร์",
    nameEN: "Flobberworm Mucus",
    level: "พื้นฐาน",
    look: "หนืดใส",
    effect: [
      "รักษาผิวหนังระคายเคือง",
      "ใช้เป็นเบสน้ำยา"
    ],
    limit: [
      "ใช้เดี่ยว ๆ ได้ผลช้า",
      "เหมาะเป็นส่วนผสมมากกว่า"
    ],
    ingredients: [
      "เมือกหนอนฟลอบเบอร์บริสุทธิ์",
      "ใบมินต์แห้ง (เล็กน้อย)"
    ],
    steps: [
      "กรองเมือกให้สะอาด",
      "ผสมใบมินต์แห้งเล็กน้อย คนจนเข้ากัน"
    ],
    badges: ["ผิวหนัง", "ฐานยา", "พื้นฐาน"]
  },

  {
    id: "burn",
    nameTH: "น้ำยารักษาแผลไฟไหม้",
    nameEN: "Burn-Healing Salve",
    level: "กลาง",
    look: "ครีมข้น กลิ่นสมุนไพร",
    effect: [
      "ลดการไหม้จากไฟเวทมนตร์",
      "ป้องกันแผลเป็น"
    ],
    limit: [
      "ไฟจากคำสาปดำรุนแรงต้องพบฮีลเลอร์"
    ],
    ingredients: [
      "Essence of Dittany",
      "ขี้ผึ้งสมุนไพร",
      "เมือกฟลอบเบอร์"
    ],
    steps: [
      "ตั้งไฟอ่อนมาก แล้วนำขี้ผึ้งสมุนไพรลงหม้อให้เริ่มละลาย",
      "คนช้า ๆ จนขี้ผึ้งกลายเป็นเนื้อเหลวเนียน",
      "ลดไฟลงอีก (ห้ามเดือด)",
      "เติม Essence of Dittany ทีละหยด แล้วคนให้เข้ากัน",
      "ใส่เมือกหนอนฟลอบเบอร์ลงไป (ปริมาณเล็กน้อยพอให้เนื้อข้น)",
      "คนต่อจนได้เนื้อครีมสม่ำเสมอ",
      "ปิดไฟ แล้วพักให้เย็นก่อนบรรจุขวด"
    ],
    badges: ["ไฟไหม้", "ครีม", "รักษาภายนอก"]
  },

  {
    id: "starglass",
    nameTH: "ขี้ผึ้งสตาร์กราส",
    nameEN: "Starglass Balm",
    level: "กึ่งวิชาการ",
    look: "ขี้ผึ้งประกาย",
    effect: [
      "สมานแผลเวท",
      "เพิ่มความเสถียรของพลังเวทในร่างกาย"
    ],
    limit: [
      "เป็นสูตรกึ่ง Canon ใช้เชิงตำรา/ทดลอง"
    ],
    ingredients: [
      "ใบสตาร์กราสบด",
      "ผงผลึกดารา (Astral Crystal Dust)",
      "ขี้ผึ้งเวท"
    ],
    steps: [
      "หลอมขี้ผึ้งเวทจนเป็นของเหลว",
      "ใส่ใบสตาร์กราสบด",
      "โรยผงผลึกดารา",
      "คนทวนเข็ม 9 ครั้ง",
      "ผนึกด้วยคาถาดาราศาสตร์"
    ],
    badges: ["แผลเวท", "ทดลอง", "ดาราศาสตร์"]
  }
];

// ---------- UI ----------
const potionList = document.getElementById("potionList");
const potionDetail = document.getElementById("potionDetail");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const ingredientMaster = document.getElementById("ingredientMaster");

let activeId = null;

function renderList(items){
  potionList.innerHTML = "";

  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "potion-item" + (p.id === activeId ? " active" : "");
    div.innerHTML = `
      <div class="title">${p.nameTH}</div>
      <div class="sub">${p.nameEN} • ระดับ: ${p.level}</div>
    `;
    div.addEventListener("click", () => {
      activeId = p.id;
      renderList(filterPotions(searchInput.value));
      renderDetail(p);
    });
    potionList.appendChild(div);
  });

  if(items.length === 0){
    potionList.innerHTML = `<div class="potion-item"><div class="title">ไม่พบน้ำยาที่ค้นหา</div><div class="sub">ลองใช้คำอื่นดู</div></div>`;
  }
}

function renderDetail(p){
  potionDetail.innerHTML = `
    <div class="detail-title">
      <div>
        <h3>${p.nameTH}</h3>
        <div class="meta">${p.nameEN} • ระดับ: ${p.level} • ลักษณะ: ${p.look}</div>
        <div class="badges">
          ${p.badges.map(b => `<span class="badge">${b}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="section">
      <h4>✨ สรรพคุณ</h4>
      <ul>${p.effect.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="section">
      <h4>⚠️ ข้อจำกัด / ผลข้างเคียง</h4>
      <ul>${p.limit.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="section">
      <h4>🧂 ส่วนผสม</h4>
      <ul>${p.ingredients.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="section">
      <h4>⚗️ วิธีทำ (Brewing Method)</h4>
      <div class="steps">
        ${p.steps.map((t, i) => `
          <div class="step">
            <div class="n">ขั้นที่ ${i+1}</div>
            <div class="t">${t}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function filterPotions(q){
  q = (q || "").trim().toLowerCase();
  if(!q) return potions;

  return potions.filter(p => {
    const all = `${p.nameTH} ${p.nameEN} ${p.level} ${p.look} ${p.effect.join(" ")} ${p.ingredients.join(" ")}`.toLowerCase();
    return all.includes(q);
  });
}

function renderMasterIngredients(){
  const set = new Set();
  potions.forEach(p => p.ingredients.forEach(i => set.add(i)));
  const all = Array.from(set).sort((a,b) => a.localeCompare(b, "th"));
  ingredientMaster.innerHTML = all.map(x => `<span class="tag">${x}</span>`).join("");
}

searchInput.addEventListener("input", () => {
  const items = filterPotions(searchInput.value);
  renderList(items);
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  activeId = null;
  renderList(potions);
  potionDetail.innerHTML = `
    <div class="empty-state">
      <h3>✨ เลือกน้ำยาจากด้านซ้าย</h3>
      <p>หรือพิมพ์ค้นหา แล้วกดเลือกน้ำยาที่ต้องการ</p>
    </div>
  `;
});

renderList(potions);
renderMasterIngredients();