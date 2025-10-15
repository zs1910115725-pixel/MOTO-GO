// 导航栏滚动效果
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

// 移动端菜单切换
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

// FAQ 折叠效果
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');

        // 切换当前FAQ的显示状态
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');

        // 关闭其他打开的FAQ
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

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // 关闭移动端菜单（如果打开）
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.innerHTML = '<i class="fa fa-bars text-xl"></i>';
            }

            // 滚动到目标位置
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
//收藏按钮切换
const collectBtns = document.querySelectorAll('.collect-btn');
collectBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-heart-o');
        icon.classList.toggle('fa-heart');
        icon.classList.toggle('text-primary'); // 已收藏时变主题色
    });
});
