/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package Main;

import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;

import Model.Project;
import controler.ProjectController;
import controler.TaskController;
import util.ConnectionFactory;


public class Main {
    

    public static void main(String[] args) throws SQLException {


        ProjectController projetoController = new ProjectController();
        Project projeto = new Project();

        Connection c = ConnectionFactory.getConnection();

        /* Cadastrando uma tarefa - informando os dados*/
        projeto.setName("Sistema X2");
        projeto.setDescription("Estudo de caso Sistema X2");


        projetoController.save(projeto);
        /* FIM CADASTRO*/




    }


}
