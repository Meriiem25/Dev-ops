def buildapp(){
    echo 'building the application....'
}

def testapp(){
    echo 'testing the application....'
}

def deployapp(){
    echo 'Deploying Python application...'
    echo "Deploying version ${params.VERSION}"
}


return this
