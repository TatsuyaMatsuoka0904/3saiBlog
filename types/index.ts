
// nwetからの記事インターフェイス置き場　これらを引っ張ってくる
export interface Article {
    _id: string
    title: string
    slug: string
    body: string
    meta:{
        title: string;
        description: string;
        ogImage: {
          _id: string;
          src: string;
          fileType: string;
          fileSize: number;
          fileName: string;
          width: number;
          height: number;
        };
    coverImage: {
          _id: string
          fileName: string
          fileSize: number
          fileType: string
          height: number
          src: string
          width: number
        }
    tags: {
        name: string
        slug: string
    }
  }
}

