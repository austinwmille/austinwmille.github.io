// Replace this with your actual data
const bookChallenges = [
    { title: "George R.R. Martin's 'A Clash of Kings'", author: "George R.R. Martin", challengingDistrict: "Over 20 school districts or states" },
    { title: "Nicholas Sparks' 'A Bend in the Road'", author: "Nicholas Sparks", challengingDistrict: "Several school districts" },
    { title: "Dave Pelzer's 'A Child Called 'It''", author: "Dave Pelzer", challengingDistrict: "Multiple school districts" }
];

// Populate the table with data
$(document).ready(function() {
    const $tbody = $('#challenges-tbody');
    bookChallenges.forEach(book => {
        const $tr = $('<tr>');
        $tr.append(`<td>${book.title}</td>`);
        $tr.append(`<td>${book.author}</td>`);
        $tr.append(`<td>${book.challengingDistrict}</td>`);
        $tbody.append($tr);
    });
});
