def gv
pipeline {
    agent any

    parameters {
        choice(
            name: 'VERSION',
            choices: ['1.1.0', '1.2.0', '1.3.0'],
            description: 'Select the version to deploy'
        )

        booleanParam(
            name: 'executeTests',
            defaultValue: true,
            description: 'Execute tests before deployment'
        )
    }

    stages {
        stage('init') {
            steps {
                script{
                gv = load "script.groovy"
                }
            }
        }
        stage("build "){
            steps{
                script{
                    gv.buildapp()
                }
            }
        }

        stage('Test') {
            when {
                expression {
                    params.executeTests
                }
            }
            steps {
                script{
                    gv.testdapp()
                }
                echo 'Testing Python application...'
            }
        }

        stage('deploy') {
            steps {
              script{
                    gv.deployapp()
                }
            }
        }
    }
}

