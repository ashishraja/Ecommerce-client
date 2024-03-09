const getData = async() => {
  const response = await fetch('https://dummyjson.com/products/1');
  if(!response.ok){
    throw new error('failed to fetch the data');
  }
  return response.json();
}

export default async function Example(){

  const apiData = await getData();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          {JSON.stringify(apiData)}
        </li>
      </ul>
    </div>
  );
};