// Libraries
import Vue from 'vue';

// Scripts

export default function app() {
  Vue.config.devtools = true;

  Vue.component('job-view', {
    data() {
      return { availableJobs: 3 };
    },
  });
  Vue.component('job-list', {
    template: `
      <div>
        <job v-for="job in jobs"> 
          <h2>{{ job.title }} </h2>
          <p> {{ job.information }}
        </job> 
      </div> 
    `,
    data() {
      return {
        jobs: [
        {
          title: 'Frontend Developer',
          location: 'Maastricht',
          salary: '3400',
          information: 'Een prachtige baan waar je vele uitdagingen op code gebied vind',
        },
        {
          title: 'Designer',
          location: 'Sittard',
          salary: '3100',
        },
        {
          title: 'Backend Developer',
          location: 'Roermond',
          salary: '3400',
        },
        ],
      };
    },
  });
  Vue.component('job', {
    template: '<li><slot></slot></li>',
  });

// eslint-disable-next-line
  new Vue({          
      el: '#app',
      data: {

        return() {
        },
      },
  });
}
