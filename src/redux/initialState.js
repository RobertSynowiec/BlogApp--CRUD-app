const initialState = {

    posts: [
        {
            id: '1',
            title: 'Article title 1',
            shortDescription: 'Short description of the article... 1 ',
            content: 'Main content of the article 1',
            publishedDate: '02-02-2020',
            category: 'Movies',
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article title 2',
            shortDescription: 'Short description of the article... 2 ',
            content: 'Main content of the article 2',
            publishedDate: '02-02-2021',
            category: 'Sport',
            author: 'John Doe'
        },
        {
            id: '3',
            title: 'Article title 3',
            shortDescription: 'Short description of the article... 3 ',
            content: 'Main content of the article 3',
            publishedDate: '02-02-2023',
            category: 'Sport',
            author: 'John Doe'
        },
        {
            id: '4',
            title: 'Article title 4',
            shortDescription: 'Short description of the article... 4 ',
            content: 'Main content of the article 4',
            publishedDate: '02-02-2024',
            category: 'News',
            author: 'John Doe'
        },
    ],
    categories: [
        {
            name: 'Sport',
        },
        {
            name: 'News',
        },
        {
            name: 'Movies',
        }
    ]
};

export default initialState;