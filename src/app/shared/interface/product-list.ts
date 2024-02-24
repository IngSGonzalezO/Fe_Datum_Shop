export interface Project {
      id: number,
      title: string,
      badge: string,
      img: string,
      sites: string,
      desc: string,
      issue: number,
      resolved: number,
      comment: number,
      like: number,
      progress: number,
      customers_img1: string,
      customers_img2: string,
      customers_img3: string
}

export interface productList {
      id: number,
      productImg: string,
      productName: string,
      productSubName: string,
      amount: number,
      stock: string,
      startData: string
}