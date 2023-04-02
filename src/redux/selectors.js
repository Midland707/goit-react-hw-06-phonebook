// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactItems;
export const selectFilter = state => state.filter.value;

// export const selectFilteredContacts = createSelector(
//   // Масив вхідних селекторів
//   [selectContacts, selectFilter],
//   // Функція перетворювач
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     // Виконуємо обчислення та повертаємо результат
//   }
// );
