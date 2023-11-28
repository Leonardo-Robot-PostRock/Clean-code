(() => {

    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorBiographyById(id: string) {
        console.log({ id });
    }

    interface Movie {
        cast: string[]
        description: string; rating: 
        number; 
        title: string; 
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;

    }




})();
