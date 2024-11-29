import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  coursesList = [
    { id: 1, image: '/images/Fundamentos.jpg', title: 'Fundamentos de Programación', description: 'Conoce las bases de la programación desde cero.' },
    { id: 2, image: '/images/C.jpg', title: 'Desarrollo con C#', description: 'Aprende a programar aplicaciones usando C#.' },
    { id: 3, image: '/images/Flutter.jpg', title: 'Desarrollo Móvil con Flutter', description: 'Crea aplicaciones móviles multiplataforma con Flutter.' },
    { id: 4, image: '/images/Java.jpg', title: 'Programación en Java', description: 'Domina Java, uno de los lenguajes más populares del mundo.' },
    { id: 5, image: '/images/Python.jpg', title: 'Python para Principiantes', description: 'Explora el mundo de la programación con Python.' },
    { id: 6, image: '/images/HTML.jpg', title: 'HTML y CSS', description: 'Diseña y estructura páginas web con HTML y CSS.' },
    { id: 7, image: '/images/Git.jpg', title: 'Control de Versiones con Git', description: 'Gestiona proyectos y colabora en equipo con Git.' },
    { id: 8, image: '/images/SQL.jpg', title: 'Bases de Datos con SQL', description: 'Aprende a trabajar con bases de datos relacionales.' },
    { id: 9, image: '/images/Mongo.jpg', title: 'Bases de Datos NoSQL con MongoDB', description: 'Descubre cómo manejar bases de datos NoSQL con MongoDB.' }
  ];
}
