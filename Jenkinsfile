pipeline{
    agent any
    triggers{
        pollSCM('H/5 * * * *')
    }
    stages{
        stage('Checkout') {
            steps{
                git 'https://github.com/kulkasturi/Training_Project.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
