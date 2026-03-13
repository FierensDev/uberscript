export type Meal = {
  id: number
  name: string
  calories: number
  price: number
}

export async function fetchMeals(): Promise<Meal[]> {
  try {
    const res = await fetch('https://keligmartin.github.io/api/meals.json');
    
    if (!res.ok) {
      throw new Error('err res');
    }
    
    const data = await res.json() as Meal[];
    console.log(`data : `, data)
    return data;
  } catch(err){
    console.error('Erreur lors du chargement des repas')
    return [];
  }
}