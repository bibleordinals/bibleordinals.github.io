// script.js
document.addEventListener('DOMContentLoaded', function() {
    const inscriptions = [
        { title: "Matthew", id: "78106", link: "https://ordinals.com/inscription/54a1d0bf0e7e76ef2957aed3f0fd706731c000da9d437c3a629d83352bb9867di0" },
        { title: "Mark", id: "77079", link: "https://ordinals.com/inscription/4e3713991f965579ea1f79f1100aae8fa3fce205f3ea8a959e285236467a2c23i0" },
        { title: "Luke", id: "78162", link: "https://ordinals.com/inscription/8088da9ce1d7b467f7ff8a69deef5bb675b70c0981fd7f14eab5c7aa961577cdi0" },
        { title: "John", id: "78142", link: "https://ordinals.com/inscription/19ffbb4de0967cc0ca2be81ed0cc47cbc66290d1f5914fea75cdc0d729bb78b5i0" },
        { title: "Acts", id: "89295", link: "https://ordinals.com/inscription/8f6741397c8fb6c04d9188d8e3490a6b066eeff9fb8ddddf4b74dfce1d29937bi0" },
        { title: "Romans", id: "101709", link: "https://ordinals.com/inscription/af5935e3d0b1126427a2d14ca1cb8e6118af8aea9f5acdd629dd0c2909ededa5i0" },
        { title: "1 Corinthians", id: "125846", link: "https://ordinals.com/inscription/bef497df1afc3a4f8b719bc3809a0d40e43303e031f2543cfa7bafe0277d8461i0" },
        { title: "2 Corinthians", id: "125848", link: "https://ordinals.com/inscription/e831f1d927d1a9a9112551d3b0b7227fa17ccef8fa3493999022857d403eade4i0" },
        { title: "Galatians", id: "113650", link: "https://ordinals.com/inscription/37ab84b452834b5f92efcfbbb4f19bd39f4004a2cf6e9aab118ba0611a8aff2fi0" },
        { title: "Ephesians", id: "101697", link: "https://ordinals.com/inscription/dc8340be7ad78b010f7d14639fbaf9bd5b66ecb7a6b7bbf4351d8030c939109di0" },
        { title: "Philippians", id: "122581", link: "https://ordinals.com/inscription/c019f374ecde5704c3597acd3cfc43a4536eb4c98a283a9e2ec2e6f40cff7210i0" },
        { title: "Colossians", id: "91488", link: "https://ordinals.com/inscription/a07128847b0ecde91387d7fca9a2fe337776267262626a6ec0e087f956f449a5i0" },
        { title: "1 Thessalonians", id: "125847", link: "https://ordinals.com/inscription/cd60951f72a341b517e9157529d71122fd04ef3035e35bf94b2d58914d763566i0" },
        { title: "2 Thessalonians", id: "125849", link: "https://ordinals.com/inscription/2861c5916280f877862d03650e3a42dd8ef3d4c2bc14a96323ee004ba6ebf9edi0" },
        { title: "1 Timothy", id: "125032", link: "https://ordinals.com/inscription/e06d3c6dcccffcce02126f4ea473ebefb7495d1e8f5a8401b5684ceb32ec1b44i0" },
        { title: "2 Timothy", id: "125031", link: "https://ordinals.com/inscription/cdfb862591fe922b7a57cd6e875ee1a099aa746abec2712d013aadac9b023d2ei0" },
        { title: "Titus", id: "101736", link: "https://ordinals.com/inscription/1ccb5178c37806be68c8c9c3010b5321da63b92a36f01f2bfe7ea8fe8bac9fbai0" },
        { title: "Philemon", id: "113656", link: "https://ordinals.com/inscription/4a4f623bbfd40fa7b7a1679f8326e48c7999aacf38aefc724029b589b6987dcci0" },
        { title: "Hebrews", id: "89279", link: "https://ordinals.com/inscription/084a856739d6de6c5faa54aa2ffcc4f6be5448bd9f68f262bcbec760ddd5645ci0" },
        { title: "James", id: "91412", link: "https://ordinals.com/inscription/ec4238247aa074a3821ee2c7250093f8f8e9b267e20b78497399e17a49e96c31i0" },
        { title: "1 Peter", id: "125033", link: "https://ordinals.com/inscription/ecd4fe862ecdb734e52dbfea0bc074d20d5e589c8ab5bca9293a5481ff83356bi0" },
        { title: "2 Peter", id: "125036", link: "https://ordinals.com/inscription/c7127721009acca06da7b3f744bad927f2f85af0d64e8bbd9eebf68e201e27b1i0" },
        { title: "1 John", id: "125034", link: "https://ordinals.com/inscription/9b13836277bac68d1d20490baca5ff3685faf1929dcbe423987b5227d46be276i0" },
        { title: "2 John", id: "125037", link: "https://ordinals.com/inscription/74aa6b110806b26dc3830e14d36d020e77541ef6991a641b710d0ea3766f2ae1i0" },
        { title: "3 John", id: "125038", link: "https://ordinals.com/inscription/ae736bd0d2d397132da816c3a8ccfd66ce709f1a1e2fbd4d79d23b9a5ab4ddf9i0" },
        { title: "Jude", id: "91381", link: "https://ordinals.com/inscription/d5428fd19af6fdcbb61ed11d4bcd8dc0443293a413ba22ec1d18257ca093190ei0" },
        { title: "Revelation", id: "101517", link: "https://ordinals.com/inscription/f5810b64bb71a2b1369768c25eddc625e4dbbaf12c2ab7ce8c8fd3e4c9bcea17i0" },
        // Add more inscriptions here
    ];

    const inscriptionsTable = document.getElementById('inscriptions-table');

    inscriptions.forEach(inscription => {
        const row = inscriptionsTable.insertRow(-1); // Insert a new row at the end of the table
        const titleCell = row.insertCell(0);
        const idCell = row.insertCell(1);
        const linkCell = row.insertCell(2);

        titleCell.textContent = inscription.title;
        idCell.textContent = inscription.id;
        linkCell.innerHTML = `<a href="${inscription.link}" target="_blank">View</a>`;
    });
});