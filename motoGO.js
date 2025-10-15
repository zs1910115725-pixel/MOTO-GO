// ����������Ч��
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('shadow-sm');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('shadow-sm');
    }
});

// �ƶ��˲˵��л�
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenuBtn.innerHTML = '<i class="fa fa-bars text-xl"></i>';
    } else {
        mobileMenuBtn.innerHTML = '<i class="fa fa-times text-xl"></i>';
    }
});

// FAQ �۵�Ч��
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');

        // �л���ǰFAQ����ʾ״̬
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');

        // �ر������򿪵�FAQ
        faqToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                const otherContent = otherToggle.nextElementSibling;
                const otherIcon = otherToggle.querySelector('i');

                if (!otherContent.classList.contains('hidden')) {
                    otherContent.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                }
            }
        });
    });
});

// ƽ������
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // �ر��ƶ��˲˵�������򿪣�
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.innerHTML = '<i class="fa fa-bars text-xl"></i>';
            }

            // ������Ŀ��λ��
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
//�ղذ�ť�л�
const collectBtns = document.querySelectorAll('.collect-btn');
collectBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-heart-o');
        icon.classList.toggle('fa-heart');
        icon.classList.toggle('text-primary'); // ���ղ�ʱ������ɫ
    });
});
