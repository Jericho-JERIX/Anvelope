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
                    if [ -f "$SECRET_FILE" ]; then
                        set -a
                        source "$SECRET_FILE"
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
