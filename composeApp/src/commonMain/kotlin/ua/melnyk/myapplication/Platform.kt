package ua.melnyk.myapplication

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform