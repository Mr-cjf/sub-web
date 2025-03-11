import Particles from "@tsparticles/vue3"
import { loadSlim } from "tsparticles-slim"

export default {
    install(app) {
        app.component("Particles", Particles)
        app.provide('particlesInit', async (engine) => {
            await loadSlim(engine)
        })
    }
}
