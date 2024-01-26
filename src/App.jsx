import React, { useState } from 'react';
import FilterButtons from './components/FilterButtons';
import StudentList from './components/StudentList';

function App() {
  const initialStudents = [
    { name: 'Alice', age: 17, grade: 'A' },
    { name: 'Bob', age: 18, grade: 'B' },
    { name: 'Charlie', age: 16, grade: 'C' },
    { name: 'Diana', age: 19, grade: 'D' },
  ];

  const filterByAge = (minAge) => {
    const filterAge = initialStudents.filter(
      (student) => student.age >= minAge
    );
    setFilteredStudents(filterAge);
  };
  const filterByGrade = (grade) => {
    const filterGrade = initialStudents.filter(
      (student) => student.grade === grade
    );
    setFilteredStudents(filterGrade);
  };
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

  return (
    <div>
      <h1>학생 목록</h1>
      {/* TODO: FilterButtons 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <FilterButtons
        /* 필요한 props를 여기에 전달하세요. */
        filterByAge={filterByAge}
        filterByGrade={filterByGrade}
        resetFilter={resetFilter}
      />

      {/* TODO: StudentList 컴포넌트를 작성하고 필요한 props를 전달하세요. */}
      <StudentList
        students={filteredStudents}
        /* 필요한 props를 여기에 전달하세요. */
      />
    </div>
  );
}

export default App;
