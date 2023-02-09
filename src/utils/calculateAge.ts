// birthdate must be in the format of 'YYYY-MM-DD'

export function calculateAge(birthdate: string): number {
    const today = new Date();
    const birthdateAsDate = new Date(birthdate);
    let age = today.getFullYear() - birthdateAsDate.getFullYear();
    const monthDifference = today.getMonth() - birthdateAsDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdateAsDate.getDate())) {
      age--;
    }
    return age;
  }