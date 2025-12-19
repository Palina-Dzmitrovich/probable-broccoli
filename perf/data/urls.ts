const baseBooksUrl = 'https://www.googleapis.com/books/v1'

export const booksUrls = {
  bookshelf: {
    list: `${baseBooksUrl}/users/userId/bookshelves`,
    shelf: `${baseBooksUrl}/users/userId/bookshelves/shelf`,
  },
  volume: {
    volumeId: `${baseBooksUrl}/volumes/volumeId`,
    volume: `${baseBooksUrl}/volumes`
  } 
};
