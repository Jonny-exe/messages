const url: string = 'http://192.168.0.16:5000/';

const parameters: object = {
  credentials: 'same-origin'
}
class GetRequest {
  makeRequest = async () => {
    // const request = new Request('https://example.com', { method: 'GET'});
    // return request;
    let response = await fetch(url, parameters);
    var text: string = await response.text()
    var json: object = await JSON.parse(text)
    return json
  }
}

class PostRequest {
  constructor(title: string, description: string) {
    this.postRequest(title, description)
  }
  postRequest = async (titleContent: string, descriptionContent: string) => {
    let body: object = {
      title: "hi",
      description: "this is the postman"
    }
    let bodyContent: string = JSON.stringify(body)

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        "Access-Control-Max-Age": "1000",
        "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, client-security-token",
        "Content-Type": "application/json"
      },
      credentials: 'same-origin',
      body: bodyContent
    });
    let result: any = await response.json()
  }
}
export { GetRequest, PostRequest }
