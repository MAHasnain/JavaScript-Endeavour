const Books = [
    {
        title: "book one",
        genre: "fiction",
        publish: 1991,
        edition: 2015
    },
    {
        title: "book two",
        genre: "science",
        publish: 1995,
        edition: 2019
    },
    {
        title: "book three",
        genre: "non-fiction",
        publish: 1990,
        edition: 2013
    },
    {
        title: "book four",
        genre: "health",
        publish: 1980,
        edition: 2010
    },
    {
        title: "book five",
        genre: "science",
        publish: 2002,
        edition: 2018
    },
    {
        title: "book six",
        genre: "history",
        publish: 1998,
        edition: 2020
    },
    {
        title: "book seven",
        genre: "science",
        publish: 2000,
        edition: 2009
    }
]


// console.log(Books);

const user1Books = Books.filter((bk) => bk.genre === "science")

const user2Books = Books.filter((bk) => { 
    return bk.publish >= 1995 && bk.genre === "science" })

console.log(user2Books);

