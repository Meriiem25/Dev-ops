
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
        stage('Build') {
            steps {
                echo 'Building Python application...'
            }
        }

        stage('Test') {
            when {
                expression {
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
                echo "Deploying version ${params.VERSION}"
            }
        }
    }
}

