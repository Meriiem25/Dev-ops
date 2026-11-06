pipeline {
    agent any
    parameters{
       string(name:'VERSION',defaultValue:'',description:'version to deploy on prod')
       choice(name:'VERSION',choices:['1.1.0','1.2.0','1.3.0'],description:'')
       booleanParam(name:'executeTests',defaultValue:true,description:'')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building Python application...'
            }
        }

        stage('Test') {
            when{
                expression{
                    params.executeTests
                }
            }
            steps {
                echo 'Testing Python application...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Python application...'
                echo"deploying version $ {params.{VERSION}"
            }
        }
    }
}
