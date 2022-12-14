//package com.itsglobal.TodoList.config;
//
//import com.itsglobal.TodoList.common.Constants;
//import com.itsglobal.TodoList.entity.Todo;
//import com.itsglobal.TodoList.repository.TodoRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class DatacConfig {
//    @Bean
//    CommandLineRunner initDatabase(TodoRepository todoRepository) {
//
//        return new CommandLineRunner() {
//            @Override
//            public void run(String... args) throws Exception {
//                Todo todo1 = new Todo("marketing", "partime" , Constants.DELETE_FALSE);
//                Todo todo2 = new Todo("HR", "fulltime" ,Constants.DELETE_FALSE);
//                Todo todo3 = new Todo("dev", "fulltime" ,Constants.DELETE_FALSE);
//                Todo todo4 = new Todo("test", "partime" ,Constants.DELETE_FALSE);
//                Todo todo5 = new Todo("BA", "fulltime" ,Constants.DELETE_FALSE);
//                Todo todo6 = new Todo("PM", "fulltime" ,Constants.DELETE_FALSE);
//
//                todoRepository.save(todo1);
//                todoRepository.save(todo2);
//                todoRepository.save(todo3);
//                todoRepository.save(todo4);
//                todoRepository.save(todo5);
//                todoRepository.save(todo6);
//            }
//        };
//    }
//}
