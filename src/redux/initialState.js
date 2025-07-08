export const initialState = {
  categories: ['Sport', 'News', 'Movies'],
  posts: [
    {
      id: '1',
      category: 'Sport',
      title: 'Getting Started with React Hooks',
      shortDescription:
        'Learn the fundamentals of React Hooks and how they can simplify your components...',
      content:
        'React Hooks revolutionized the way we write React components. In this comprehensive guide, we will explore useState, useEffect, and other essential hooks that every React developer should master.',
      publishedDate: '06/15/2025',
      author: 'Sarah Johnson',
    },
    {
      id: '2',
      category: 'News',
      title: 'Bootstrap 5: Modern Web Design',
      shortDescription:
        'Discover the new features and improvements in Bootstrap 5 for responsive design...',
      content:
        'Bootstrap 5 brings exciting new features including custom CSS properties, improved grid system, and enhanced form controls. Learn how to create beautiful, responsive websites with ease.',
      publishedDate: '06/22/2025',
      author: 'Mike Chen',
    },
    {
      id: '3',
      category: 'Sport',
      title: 'JavaScript ES6+ Features You Should Know',
      shortDescription:
        'Explore modern JavaScript features that will make your code cleaner and more efficient...',
      content:
        'Modern JavaScript offers powerful features like arrow functions, destructuring, template literals, and async/await. Master these concepts to write more elegant and maintainable code.',
      publishedDate: '06/28/2025',
      author: 'Emily Rodriguez',
    },
    {
      id: '4',
      category: 'Sport',
      title: 'Building Responsive Layouts with CSS Grid',
      shortDescription:
        'Master CSS Grid to create complex, responsive layouts with minimal code...',
      content:
        'CSS Grid is a powerful layout system that makes it easy to design complex responsive layouts. Learn the grid properties, positioning techniques, and best practices for modern web design.',
      publishedDate: '07/01/2025',
      author: 'David Park',
    },
  ],
};
