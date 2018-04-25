const INITAIL_STATE = {
  posts: [
    {
      id: 'n0001',
      image: {
        xs: 'http://placehold.it/280x220',
        sm: 'http://placehold.it/330x230'
      },
      date: '2 Nov 2016',
      title: {
        zh_tw: '荷蘭花展',
        us: 'Flower Show in Holland'
      },
      content: {
        zh_tw: '弘大團隊在今年的11月前往荷蘭參觀全球最有規模的花展。很高興可以與我們國外的團隊朋友們見面。在這個產業中，我們深深的感受到人與人之間的互動是最珍貴的。而在所有國外廠商的配合下，我們也持續地提供最高品質的商品給客戶。',
        us: 'Home sweet Home Holland. What a impressive shows! It was great to meet all the friends from all over the world. The best part about this business to connect to people and deliver what we believe in - the best quality product to our clients.'
      }
    },
    {
      id: 'n0002',
      image: {
        xs: 'http://placehold.it/280x220',
        sm: 'http://placehold.it/330x230'
      },
      date: '5 Oct 2016',
      title: {
        zh_tw: '厄瓜多與哥倫比亞花展',
        us: 'Agriflor in Quito and trip to Columbia'
      },
      content: {
        zh_tw: '厄瓜多有許多高品質的花尤其以玫瑰花最為出名。我們很幸運的在當地有許多朋友提供協助。有了各家廠商的支持，我們更可以為客戶提供各式各樣的園藝產品，以及最新的知訊。',
        us: 'It was such a great show and there were so many beautiful flowers in Ecuador. Specially thanks to everyone we met during this trip. Without our supplier\'s support, we won\'t have a successful business in our local markets. Big Hugs!'
      }
    },
    {
      id: 'n0003',
      image: {
        xs: 'http://placehold.it/280x220',
        sm: 'http://placehold.it/330x230'
      },
      date: '5 Oct 2016',
      title: {
        zh_tw: '日本大阪花市與YMS參訪之行',
        us: 'Osaka Flower Auction Market and YMS'
      },
      content: {
        zh_tw: '在夏季之後，為了年前的準備，前往日本大阪參訪大阪花市並與我們的好夥伴YMS見面。我們很期待可以讓台灣與中國的市場更加了解了日本花卉。',
        us: 'Great opportunity to visit the Osaka Flower Auction Market. Thanks to our friend, YMS, to organize such a great trip. We are looking forwards to bring more beautiful Japanese flowers to Taiwan and China.'
      }
    }
  ]
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}