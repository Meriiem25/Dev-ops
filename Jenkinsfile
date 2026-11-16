
pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'db9d1111-6523-46f8-9196-9bb976f12fd0'
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

        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'docker run --rm --user root -v "%CD%:/app" -w /app node:18-alpine npm run build'
            }
        }

        stage('Unit Tests') {
            steps {
                echo 'Running unit tests...'
                bat 'docker run --rm --user root -v "%CD%:/app" -w /app node:18-alpine npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to Netlify...'

                withCredentials([
                    string(
                        credentialsId: 'netlify-auth-token',
                        variable: 'NETLIFY_AUTH_TOKEN'
                    )
                ]) {
                    bat 'docker run --rm -v "%CD%:/app" -w /app -e NETLIFY_AUTH_TOKEN -e NETLIFY_SITE_ID node:18-alpine sh -c "npx --yes netlify-cli deploy --prod --dir=dist --site $NETLIFY_SITE_ID"'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}









