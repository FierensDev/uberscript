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
      throw new Error('erreur response');
    }
    
    const data = await res.json() as Meal[];
    
    return data;
  } catch(err){
    console.error('Erreur lors du chargement des repas')
    return [];
  }
}