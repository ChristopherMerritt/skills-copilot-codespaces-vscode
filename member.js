function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'app/member/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            skills: '='
        }
    };
}
