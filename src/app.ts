interface Meal {
  id: number;
  name: string;
  calories: number;
  price: number;
}

async function fetchData() {
  try {
    const res = await fetch('https://keligmartin.github.io/api/meals.json');
    
    if (!res.ok) {
      throw new Error('err res');
    }
    
    const data = await res.json();
    console.log('deunsLog :', data);
  } catch(err){
    console.error('erruer')
  }
}

fetchData();
console.log('yo')