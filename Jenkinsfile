pipeline {
    agent any
    stages {
        stage('Stop Existing Containers') {
            steps {
                sh '''
                docker-compose down || true
                '''
            }
        }
        stage('Build and Run Container') {
            steps {
                withCredentials([file(credentialsId: 'anvelope-env-file', variable: 'SECRET_FILE')]) {
                    sh '''
                    # Ensure workspace has proper permissions
                    sudo chmod -R 755 .
                    
                    # Read the secret file and export all variables
                    if [ -f "$SECRET_FILE" ]; then
                        set -a
                        . "$SECRET_FILE"
                        set +a
                    fi
                    
                    # Build and run with docker-compose
                    docker-compose up -d --build
                    '''
                }
            }
        }
    }
}
