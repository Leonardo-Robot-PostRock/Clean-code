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

    //Continuación

    //bad
    const getPayAmountBadCode = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if (isDead) {
            result = 1500;
        } else {
            if (isSeparated) {
                result = 2500;
            } else {
                if (isRetired) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }

        return result;
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        let result: number;

        if (isDead) return 1500;

        if (isSeparated) return 2500;

        if (isRetired) return 3000;

        return 4000;
        // return isRetired ? 3000 : 4000;
    }




})();
