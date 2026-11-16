
pipeline {
    agent any
    environment{
        NETLIFY_SITE_ID='db9d1111-6523-46f8-9196-9bb976f12fd0'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'docker run --rm --user root -v "%CD%:/app" -w /app node:18-alpine npm ci'
            }
        }

        stage('Clean Build Directory') {
            steps {
                echo 'Cleaning previous build files...'
                bat '''
                    if exist dist (
                        attrib -R dist\\* /S /D
                        rmdir /S /Q dist
                    )
                '''
            }
        }

        stage('Check Permissions') {
            steps {
                echo 'Checking Docker permissions...'
                bat 'docker run --rm --user root -v "%CD%:/app" -w /app node:18-alpine sh -c "id; mkdir -p /app/dist; ls -ld /app /app/dist; touch /app/dist/test-write.txt; ls -l /app/dist"'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'docker run --rm --user root -v "%CD%:/app" -w /app node:18-alpine npm run build'
            }
        }

        stage('Tests') {
            steps {
                echo 'Running application tests...'
                bat 'docker run --rm --user root -v "%CD%:/app" -w /app node:18-alpine npm test'
            }
        }
        stage('Unit Tests') {
    steps {
        bat 'docker run --rm --user root -v "%CD%:/app" -w /app node:18-alpine npm test'
    }
}
    }
}








