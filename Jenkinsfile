
pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'docker run --rm -v "%CD%:/app" -w /app node:18-alpine npm ci'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'docker run --rm -v "%CD%:/app" -w /app node:18-alpine npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'docker run --rm -v "%CD%:/app" -w /app node:18-alpine npm test'
            }
        }
    }
}



